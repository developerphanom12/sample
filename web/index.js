import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import serveStatic from "serve-static";
import shopify from "./shopify.js";
import PrivacyWebhookHandlers from "./privacy.js";
import axios from "axios";
import connection from "./database/connection.js";
import { DeliveryMethod, Session } from "@shopify/shopify-api";
import Stripe from 'stripe';
import { FilterRoutes } from "./routes/FilterRoutes.js";
const stripe = new Stripe('sk_test_51LXnk3SJnGxZHiXjkgEjb9t9x26OZ7ZrEbshcB5jISX6ThscyeOUThQH7EHyHXwpTvZ0vJPFUj9QE3aWsC4q91eq0075BWV3Vg');

import dotenv  from 'dotenv'
 
dotenv.config(); 

const PORT = 
  process.env.BACKEND_PORT 

  console.log("port",PORT)
const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`;

const app = express();

app.get(shopify.config.auth.path, shopify.auth.begin());
app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(),
  shopify.redirectToShopifyOrAppRoot()
);
app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({ webhookHandlers: PrivacyWebhookHandlers })
);


const removeDataFromDatabase = (domain) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM shopdetail WHERE shopname = ?";
    connection.query(query, [domain], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const webhookHandler = async (req, res) => {
  try {
    console.log("Webhook received:", req.body);
    const { domain } = req.body;
    if (!domain) {
      throw new Error("No domain found in the webhook payload.");
    }
    await removeDataFromDatabase(domain);
    console.log(`Data removed for shop: ${domain}`);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error handling app uninstalled event:', error);
    res.sendStatus(500);
  }
};

const webhookHandler11 = async (req, res) => {
    console.log("Webhook received:dfgdfgdfgdddddddddddddddddddddddddddddddddddf", );
  
};

app.use(express.json());

app.use('/apiProduct',FilterRoutes )
app.post('/api/webhooks/deletion', webhookHandler);
app.post('/api/webhooks/installation', webhookHandler11);

app.use("/api/*", shopify.validateAuthenticatedSession());
app.use(express.json());



app.get("/api/collectionslist", async (req, res) => {
  try {  
    const session_data = res.locals.shopify?.session;

    if (!session_data || !session_data.shop || !session_data.accessToken) {
      return res.status(401).json({ success: false, error: "Unauthorized: Session is not valid" });
    }

    const shopName = session_data.shop;
    const accessToken = session_data.accessToken;

    const query = `
      {
        collections(first: 50) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `;

    const response = await axios.post(
      `https://${shopName}/admin/api/graphql.json`,
      { query },
      {
        headers: {
          "X-Shopify-Access-Token": accessToken,
        },
      }
    );

    if (response.data.errors) {
      throw new Error(response.data.errors[0].message);
    }

    const collections = response.data.data.collections.edges.map(
      (edge) => edge.node
    );

    res
      .status(200)
      .json({ status: 200, data: collections, shopName, accessToken });
  } catch (error) {
    console.error("Error fetching collections:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export const Product = async (req, res) => {
  try {
    const shopName = req.query.shopName;

    const tokenShop = await checkTokenShop(shopName);

    const query = `
    {
      products(first: 100, query: "status:active") {
        edges {
          node {
            productType
            variants(first: 50) {
              edges {
                node {                
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }           
          }
        }
      }
    }
    `;

    const response = await axios.post(
      `https://${shopName}/admin/api/graphql.json`,
      { query },
      {
        headers: {
          "X-Shopify-Access-Token": tokenShop,
        },
      }
    );

    res.status(200).json(response.data.data);
  } catch (error) {
    console.error("Error fetching product data:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

app.post("/api/data", (req, res) => {
  try {
    const { name, collections } = req.body;

    if (!name || !collections || !Array.isArray(collections)) {
      return res.status(400).json({ success: false, error: "Invalid input data" });
    }

    const session_data = res.locals.shopify.session;
    const shopname = session_data.shop;
    const tokenshop = session_data.accessToken;

    connection.beginTransaction((err) => {
      if (err) {
        throw err;
      }

      connection.query(
        "INSERT INTO shopdetail (name, shopname, tokenshop) VALUES (?, ?, ?)",
        [name, shopname, tokenshop],
        (err, result) => {
          if (err) {
            return connection.rollback(() => {
              console.error("Error inserting data into shopdetail1:", err);
              res.status(500).json({
                success: false,
                error: "Failed to insert data into database",
              });
            });
          }

          const shop_id = result.insertId;

          const insertCollectionPromises = collections.map((collection) => {
            return new Promise((resolve, reject) => {
              connection.query(
                "INSERT INTO shop_collection (collection_id, collection_name, shop_id,domain) VALUES (?, ?, ?, ?)",
                [collection.id, collection.title, shop_id,shopname],
                (err, result) => {
                  if (err) {
                    return reject(err);
                  }
                  resolve(result);
                }
              );
            });
          });

          Promise.all(insertCollectionPromises)
            .then(() => {
              connection.commit((err) => {
                if (err) {
                  return connection.rollback(() => {
                    console.error("Transaction commit error:", err);
                    res.status(500).json({
                      success: false,
                      error: "Failed to commit transaction",
                    });
                  });
                }
                res.status(200).json({ success: true, message: "Data inserted successfully" });
              });
            })
            .catch((error) => {
              connection.rollback(() => {
                console.error("Error inserting collections into shop_collection:", error);
                res.status(500).json({
                  success: false,
                  error: "Failed to insert data into database",
                });
              });
            });
        }
      );
    });
  } catch (error) {
    console.error("Error handling /api/data:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const appInstallHandler = async (topic, shop, body, webhookId) => {
  console.log("Store Data:", { topic, shop, body, webhookId });
};
const webhookHandlers = {
  // Define webhook for app installation event
  APP_INSTALL: {
    // Specify delivery method (HTTP or other)
    deliveryMethod: DeliveryMethod.Http,
    // Define callback URL where webhook payload will be sent
    callbackUrl: "/api/webhooks",
    // Specify callback function to handle webhook payload
    callback: appInstallHandler,
  },
  // Define other webhook handlers for different events as needed
};
app.post("/subscription", (req, res) => {
  try {
    const {subscription_name,price,productnumber } = req.body;
    const sql =
      "INSERT INTO subscription_filter (subscription_name, price,productnumber) VALUES (?, ?, ?)";

    connection.query(
      sql,
      [subscription_name, price,productnumber],
      (err, result) => {
        if (err) {
          console.error("Error inserting data into MySQL:", err);
          res.status(500).json({
            success: false,
            error: "Failed to insert data into database",
          });
          return;
        }
        console.log("Data inserted into MySQL:", result);
        res
          .status(200)
          .json({ success: 200, message: "Data inserted successfully" });
      }
    );
  } catch (error) {
    console.error("Error handling /api/data:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});
app.post("/akkpi/orderSubscription", (req, res) => {
  try {
    const session_data = res.locals.shopify?.session;
    const shop="fashion-hub-444.myshopify.com"
    const {sub_id} = req.body;
    const sql =
      "INSERT INTO user_subscription (sub_id, domain) VALUES (?, ?)";
    connection.query(
      sql,
      [sub_id, shop],
      (err, result) => {
        if (err) {
          console.error("Error inserting data into MySQL:", err);
          res.status(500).json({
            success: false,
            error: "Failed to insert data into database",
          });
          return;
        }
        console.log("Data inserted into MySQL:", result);
        res
          .status(200)
          .json({ success: 200, message: "Data inserted successfully" });
      }
    );
  } catch (error) {
    console.error("Error handling /api/data:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/charge', async (req, res) => {
  const { shop, subscriptionId, email } = req.body; 
  const session_data = res.locals.shopify?.session;
  const session_data1 = session_data.shop;
console.log("session",session_data)
  const subscription = await new Promise((resolve, reject) => {
    const query = 'SELECT price FROM subscription_filter WHERE id = ?';
    connection.query(query, [subscriptionId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.length > 0 ? results[0] : null);
      }
    });
  });

  if (!subscription) {
    return res.status(404).json({ success: false, error: 'Subscription not found' });
  }

  const charge = {
    "recurring_application_charge": {
      "name": "My Plan",
      "price": parseFloat(subscription.price),
      "return_url": `https://${session_data1}/admin/apps/05ab46c3999338f66433094baca6bee0`,
      "test": true
    }
  };

  try {
    const response = await axios.post(`https://fashion-hub-444.myshopify.com/admin/api/2024-04/recurring_application_charges.json`, charge, {
      headers: {
        "X-Shopify-Access-Token": session_data.accessToken
      }
    });

    const chargeDetails = response.data.recurring_application_charge;
    console.log("Shopify Charge Details:", chargeDetails);
    const customer = await stripe.customers.create({
      description: `Customer for ${subscriptionId}`,
      metadata: {
        shop: session_data1,
        subscriptionId: subscriptionId
      }
    });
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseFloat(subscription.price) * 100, 
      currency: 'usd',
      description: 'Payment for subscription',
      receipt_email: "developer@gmail.com", 
      customer: customer.id 
    });
    console.log("Stripe Payment Intent:", paymentIntent);

    res.status(200).json({ 
      confirmationUrl: chargeDetails.confirmation_url,
      stripePaymentIntent: paymentIntent
    });
  } catch (error) {
    console.error('Error creating charge:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});
app.post('/api/webhooks/charge', async (req, res) => {
  try {
    const { id, status, name } = req.body.recurring_application_charge;
    console.log("iddiidid",id,status)
    const { shop } = req.body;

    if (status === 'active') {
      const query = 'UPDATE subscription_filter SET  is_active = 0, update_date = NOW() WHERE id = ?';
      connection.query(query, [shop, id], (err, result) => {
        if (err) {
          console.error('Error updating data in MySQL:', err);
          res.status(500).json({ success: false, error: 'Failed to update data in database' });
        } else {
          console.log('Data updated in MySQL:', result);
          res.status(200).json({ success: true, message: 'Subscription activated successfully' });
        }
      });
    } else {
      res.status(400).json({ success: false, message: 'Charge not active' });
    }
  } catch (error) {
    console.error('Error handling charge webhook:', error);
    res.status(500).json({ success: false, error: error.message });
  }
})


app.post("/api/colors", (req, res) => {
  try {
    const colors = req.body;

    if (!Array.isArray(colors) || colors.length === 0) {
      return res.status(400).json({ success: false, error: "Invalid input data" });
    }

    const session_data = res.locals.shopify.session;
    const shopname = session_data.shop;
    const tokenshop = session_data.accessToken;

    connection.beginTransaction((err) => {
      if (err) {
        throw err;
      }

      const insertPromises = colors.map(({ color, color_name }) => {
        return new Promise((resolve, reject) => {
          connection.query(
            "INSERT INTO shop_colorlist (color, color_name, shopname) VALUES (?, ?, ?)",
            [color, color_name, shopname],
            (err, result) => {
              if (err) {
                return reject(err);
              }
              resolve(result);
            }
          );
        });
      });

      Promise.all(insertPromises)
        .then(() => {
          connection.commit((err) => {
            if (err) {
              return connection.rollback(() => {
                console.error("Error committing transaction:", err);
                res.status(500).json({
                  success: false,
                  error: "Failed to commit transaction",
                });
              });
            }

            res.status(200).json({ success: true, message: "Data inserted successfully" });
          });
        })
        .catch((err) => {
          connection.rollback(() => {
            console.error("Error inserting data into shop_colorlist:", err);
            res.status(500).json({
              success: false,
              error: "Failed to insert data into database",
            });
          });
        });
    });
  } catch (error) {
    console.error("Error handling /api/data:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => {
  console.log(`Server is running on ${PORT} `);
});

app.use(shopify.cspHeaders());
app.use(serveStatic(STATIC_PATH, { index: false }));
app.use("/*", shopify.ensureInstalledOnShop(), async (req, res, next) => {
  if (typeof req.query.shop !== "string") {
    res.status(500);
    return res.send("No shop provided");
  }
console.log("dkjfksdfnndfgf",shopify.ensureInstalledOnShop())
  res.set("Content-Security-Policy", `frame-ancestors https://${req.query.shop} https://admin.shopify.com;`);
  res.set("Content-Type", "text/html");

  return res
    .status(200)
    .send(readFileSync(join(STATIC_PATH, "index.html")));
});


app.listen(PORT);
