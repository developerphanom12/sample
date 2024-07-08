import axios from 'axios';
import connection from "../database/connection.js";


async function checkTokenShop(shopName) {
  return new Promise((resolve, reject) => {
    const query = "SELECT tokenshop FROM shopdetail WHERE shopname = ?";
    connection.query(query, [shopName], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.length > 0 ? results[0].tokenshop : null);
      }
    });
  });
}


function checkProduct(shopName) {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT sf.productnumber
      FROM user_subscription us
      LEFT JOIN subscription_filter sf ON us.sub_id = sf.id
      WHERE us.domain = ?
    `;
    connection.query(query, [shopName], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.length > 0 ? results[0].productnumber : null);
      }
    });
  });
}


function checkorderDesign(shopName) {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT * from shopdesignnorder
      WHERE shopName = ?
    `;
    connection.query(query, [shopName], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.length > 0 ? results[0].oder : null);
      }
    });
  });
}
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


export const filtercollections = async (req, res) => {
  try {
    const { sizes, colors, minPrice, maxPrice, shopName } = req.query;
    const tokenShop = await checkTokenShop(shopName); 
    const collectionId = req.query.collectionId;
    const requestedSize = typeof sizes === "string" ? sizes.toLowerCase() : null;
    const requestedColor = typeof colors === "string" ? colors.toLowerCase() : null;
    const minPriceValue = typeof minPrice === "string" ? parseFloat(minPrice) : null;
    const maxPriceValue = typeof maxPrice === "string" ? parseFloat(maxPrice) : null;
    const productvalue = await checkProduct(shopName)
    const response = await axios.post(
      `https://${shopName}/admin/api/graphql.json`,
      {
        query: `                     
          {
            collection(id: "${collectionId}") {
              products(first: ${productvalue}) {
                edges {
                  node {  
                    id
                    title
                    handle
                    
                    variants(first: 60) {
                      edges {
                        node {
                          id
                          title
                          price
                          image {
                            src
                          }
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
          }
        `,
      },
      {
        headers: {
          "X-Shopify-Access-Token": tokenShop,
        },
      }
    );

    const products = response.data.data.collection.products.edges;
    const filteredProducts = products.filter((product) => {
      const variants = product.node.variants.edges;
      return variants.some((variant) => {
        const variantOptions = variant.node.selectedOptions;
        const variantTitle = variant.node.title.toLowerCase();
        const variantPrice = parseFloat(variant.node.price);

        const hasRequestedSize =
          requestedSize === null ||
          variantOptions.some(
            (option) =>
              option.name.toLowerCase() === "size" &&
              option.value.toLowerCase() === requestedSize
          );
        const hasRequestedColor =
          requestedColor === null ||
          variantOptions.some(
            (option) =>
              option.name.toLowerCase() === "color" &&
              option.value.toLowerCase() === requestedColor
          );

        const isWithinPriceRange =
          minPriceValue === null ||
          maxPriceValue === null ||
          (variantPrice >= minPriceValue && variantPrice <= maxPriceValue);

        return hasRequestedSize && hasRequestedColor && isWithinPriceRange;
      });
    }).map((product) => ({
      id: product.node.id,
      title: product.node.title,
      images: product.node.images,
      handle:product.node.handle,
      variants: product.node.variants.edges
        .filter((variant) => {
          const variantOptions = variant.node.selectedOptions;
          const variantPrice = parseFloat(variant.node.price);

          const hasRequestedSize =
            requestedSize === null ||
            variantOptions.some(
              (option) =>
                option.name.toLowerCase() === "size" &&
                option.value.toLowerCase() === requestedSize
            );

          const isWithinPriceRange =
            minPriceValue === null ||
            maxPriceValue === null ||
            (variantPrice >= minPriceValue && variantPrice <= maxPriceValue);

          return hasRequestedSize && isWithinPriceRange;
        })
        .map((variant) => ({
          id: variant.node.id,
          title: variant.node.title,
          price: variant.node.price,
          image: variant.node.image ? variant.node.image.src : null,
          selectedOptions: variant.node.selectedOptions,
        })),
    }));

    if (filteredProducts.length > 0) {
      res.status(200).json({ products: filteredProducts ,productvalue});
    } else {
      res.status(200).json({ message: "No products match the given filters." });
    }
  } catch (error) {
    console.error("Error fetching product data:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};



 export const search = async (req, res) => {
  try {
    const { keyword, shopName } = req.query;
    const tokenShop = await checkTokenShop(shopName); 

    const response = await axios.post(
      `https://${shopName}/admin/api/graphql.json`,
      {
        query: `
          {
            products(first: 50, query: "status:active ${keyword ? '(title:*' + keyword + '* OR description:*' + keyword +  '* OR vendor:*' + keyword +  '*  OR sku:*'+keyword + '*)' : ''}") {
              edges {
                node {
                  id
                  title
                  handle
                  description
                  images(first: 3) {
                    edges {
                      node {
                        id
                        src
                      }
                    }
                  }
                  variants(first: 5) {
                    edges {
                      node {
                        id
                        title
                        price
                        sku
                        image {
                          src
                        }
                        selectedOptions {
                          name
                          value
                        }
                      }
                    }
                  }
                  collections(first: 1) {
                    edges {
                      node {
                        id
                        title
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      },
      {
        headers: {
          "X-Shopify-Access-Token": tokenShop,
        },
      }
    );

    const products = response.data.data.products.edges;

    if (products.length > 0) {
      res.status(200).json({ products: products });
    } else {
      res.status(200).json({ message: "No products match the given keyword." });
    }
  } catch (error) {
    console.error("Error fetching product data:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};



export const orderdesign = async (req, res) => {
  try {
    const shopName = req.query.shopName; 

    const tokenShop = await checkorderDesign(shopName); 
  
    if(tokenShop){
      res.status(201).json({ status: 201, data: tokenShop });
 
    }
    
  } catch (error) {
    console.error("Error handling /api/data:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};


export const getoffer = (req, res) => {
  try {
    const sql = `SELECT * FROM subscription_filter WHERE is_deleted = 0`;

    connection.query(sql, (err, result) => {
      if (err) {
        console.error("Error fetching data from MySQL:", err);
        res.status(500).json({
          success: false,
          error: "Failed to fetch data from the database",
        });
        return;
      }
      console.log("Data fetched from MySQL:", result);
      res.status(200).json({
        success: 200,
        message: "Data fetched successfully",
        data: result,
      });
    });
  } catch (error) {
    console.error("Error handling /apihgfg/getoffer:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};





export const collectionslist = async (req, res) => {
  try {
    const shopName = req.query.shopName;

    const query = `
      SELECT sc.id AS shop_id,
             sc.shopname,
             sd.id AS detail_id,
             sd.domain,
             sd.collection_id,
             sd.collection_name,
             us.id AS user_id,
             us.sub_id,
             us.domain AS us_domain
      FROM shopdetail sc
      INNER JOIN shop_collection sd ON sc.shopname = sd.domain
      LEFT JOIN user_subscription us ON sd.domain = us.domain
      WHERE sc.shopname = ?
    `;

    connection.query(query, [shopName], async (err, results) => {
      if (err) {
        console.error("Error fetching collections:", err);
        res.status(500).json({ success: false, error: err.message });
        return;
      }

      let collectionsData = results.map(row => ({
        collection_id: row.collection_id,
        collection_name: row.collection_name,
        sub_id: row.sub_id
      }));

      if (collectionsData.some(row => row.sub_id === 1)) {
        collectionsData = collectionsData.filter(row => row.sub_id === 1).slice(0, 1);
      } else if (collectionsData.some(row => row.sub_id === 2)) {
        collectionsData = collectionsData.filter(row => row.sub_id === 2).slice(0, 2);
      } else if (collectionsData.some(row => row.sub_id === 3)) {
        collectionsData = collectionsData.filter(row => row.sub_id === 3).slice(0, 4);
      }

      const tokenShop = await checkTokenShop(shopName);
      const shopUrl = `https://${shopName}/admin/api/graphql.json`;

      const graphqlQuery = `
        {
          collections(first: 10) {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      `;

      const graphqlData = JSON.stringify({ query: graphqlQuery });

      const headers = {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': tokenShop
      };

      try {
        const shopifyResponse = await axios.post(shopUrl, graphqlData, { headers });
        const shopifyCollections = shopifyResponse.data;

        const combinedData = {
          mysqlData: collectionsData,
        };

        res.status(200).json({ status: 200, data: combinedData });
      } catch (shopifyError) {
        console.error("Error fetching data from Shopify:", shopifyError.response ? shopifyError.response.data : shopifyError.message);
        res.status(500).json({ success: false, error: shopifyError.message });
      }
    });
  } catch (error) {
    console.error("Error fetching collections:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};


export const colorlist = (req, res) => {
  try {
    const sql = `SELECT * FROM shop_colorlist`;

    connection.query(sql, (err, result) => {
      if (err) {
        console.error("Error fetching data from MySQL:", err);
        res.status(500).json({
          success: false,
          error: "Failed to fetch data from the database",
        });
        return;
      }
      console.log("Data fetched from MySQL:", result);
      res.status(200).json({
        success: 200,
        message: "Data fetched successfully",
        data: result,
      });
    });
  } catch (error) {
    console.error("Error handling /apihgfg/getoffer:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};