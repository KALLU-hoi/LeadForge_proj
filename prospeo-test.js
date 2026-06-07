
const axios = require("axios");
require("dotenv").config();

async function testProspeo() {
  try {
    const response = await axios.post(
      "https://api.prospeo.io/search-person",
      {
        page: 1,
        filters: {
          company: {
            websites: {
              include: ["razorpay.com"]
            }
          }
        }
      },
      {
        headers: {
          "X-KEY": process.env.PROSPEO_API_KEY,
          "Content-Type": "application/json"
        }
      }
    );

    console.log(
      JSON.stringify(response.data, null, 2)
    );

  } catch (error) {
    console.log(
      error.response?.data || error.message
    );
  }
}

testProspeo();