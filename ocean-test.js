
const axios = require("axios");
require("dotenv").config();

async function searchLookalikeCompanies() {
  console.log("Searching for lookalike companies...\n");

  const apiKey = process.env.OCEAN_API_KEY;

  if (!apiKey) {
    console.error("Error: OCEAN_API_KEY not found in .env");
    return;
  }

  try {
    const response = await axios.post(
      "https://api.ocean.io/v3/search/companies",
      {
        size: 5,
        companiesFilters: {
          lookalikeDomains: ["stripe.com"],
          excludeDomains: ["stripe.com"]
        }
      },
      {
        headers: {
          "X-Api-Token": apiKey,
          "Content-Type": "application/json"
        }
      }
    );

    const data = response.data;
    console.log(JSON.stringify(data.companies[0], null, 2));

    console.log(`Total results available: ${data.total || 0}\n`);

    if (!data.companies || data.companies.length === 0) {
      console.log("No companies found.");
      return;
    }

    console.log(`Companies returned: ${data.companies.length}\n`);

    data.companies.forEach((item, index) => {
  console.log(`${index + 1}. ${item.company.name}`);
  console.log(`   Domain: ${item.company.domain}`);
  console.log(`   Relevance: ${item.relevance}`);
  console.log("");
});

  } catch (error) {
    console.error("\nError occurred:");

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Response:", error.response.data);
    } else {
      console.error(error.message);
    }
  }
}

searchLookalikeCompanies();