
const axios = require("axios");
require("dotenv").config();

async function enrichPerson() {

  const personId = "aaaaddc0e348f42f05b7d605";

  try {

    const response = await axios.post(
      "https://api.prospeo.io/enrich-person",
      {
        only_verified_email: true,
        enrich_mobile: false,
        data: {
          person_id: personId
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

enrichPerson();