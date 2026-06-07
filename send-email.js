const SibApiV3Sdk = require('sib-api-v3-sdk');
require('dotenv').config();

const defaultClient = SibApiV3Sdk.ApiClient.instance;

const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

async function sendTestEmail() {
  try {

    const emailData = {
      sender: {
        name: "LeadForge",
        email: "leadforge@example.com"
      },

      to: [
        {
          email: "vkarunima2005@gmail.com"
        }
      ],

      subject: "LeadForge Test Email",

      textContent: `
Hello,

This email was generated through the LeadForge pipeline.

Workflow:
Ocean API -> Prospeo Search -> Prospeo Enrich -> Brevo Email

Verified contact discovered successfully.

Regards,
LeadForge
`
    };

    const result = await apiInstance.sendTransacEmail(emailData);

    console.log("Email sent successfully!");
    console.log(result);

  } catch (error) {

    console.log("Error sending email:");

    if (error.response) {
      console.log(error.response.body);
    } else {
      console.log(error.message);
    }

  }
}

sendTestEmail();
