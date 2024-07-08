import React, { useState, useCallback } from "react";
import {
  MediaCard,
  Page,
  TextField,
  Layout,
  LegacyCard,
  Button,
} from "@shopify/polaris";
import { useAuthenticatedFetch } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";

function AppSettingsLayout() {
  const [color1, setColor1] = useState("");
  const [colorName1, setColorName1] = useState("");
  const [color2, setColor2] = useState("");
  const [colorName2, setColorName2] = useState("");
  const fetch = useAuthenticatedFetch();
  const { t } = useTranslation();

  const handleSubmit = async () => {
    try {
      const colorData = [
        { color: color1, color_name: colorName1 },
        { color: color2, color_name: colorName2 },
      ];

      const response = await fetch("/api/colors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(colorData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      }

      const responseData = await response.json();
      console.log("Data submitted successfully:", responseData);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <>
      <Page
        backAction={{ content: "Settings", url: "/" }}
        title="Enter Colors"
        primaryAction={
          <Button onClick={handleSubmit} primary>
            Save
          </Button>
        }
      >
        <div className="search-collection">
          <Layout>
            <Layout.Section>
              <TextField
                label="Store name"
                value={name}
                onChange={(newValue) => setName(newValue)}
                autoComplete="off"
              />
            </Layout.Section>

            <Layout.Section variant="oneThird">
              <LegacyCard style={{ padding: "15px" }}>
                <TextField
                  label="Color 1"
                  value={color1}
                  onChange={(newValue) => setColor1(newValue)}
                  autoComplete="off"
                />
                <TextField
                  label="Color Name 1"
                  value={colorName1}
                  onChange={(newValue) => setColorName1(newValue)}
                  autoComplete="off"
                />
                <TextField
                  label="Color 2"
                  value={color2}
                  onChange={(newValue) => setColor2(newValue)}
                  autoComplete="off"
                />
                <TextField
                  label="Color Name 2"
                  value={colorName2}
                  onChange={(newValue) => setColorName2(newValue)}
                  autoComplete="off"
                />
              </LegacyCard>
            </Layout.Section>
          </Layout>
        </div>
        <div className="media-Card">
          <Layout>
            <Layout.Section variant="oneThird">
              <LegacyCard.Section>
                <MediaCard
                  title="Getting Started"
                  description="Discovers how Shopify can power up your entrepreneurial journey."
                  popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
                >
                  <img
                    alt=""
                    width="100%"
                    height="100%"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
                  />
                </MediaCard>
              </LegacyCard.Section>
            </Layout.Section>
          </Layout>
        </div>
      </Page>
    </>
  );
}

export default AppSettingsLayout;
