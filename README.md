
# LeadForge - Automated Lead Generation Pipeline

## Overview

LeadForge is an automated lead generation workflow that:

1. Finds lookalike companies using Ocean.io
2. Finds decision makers using Prospeo
3. Enriches contacts to retrieve verified email addresses
4. Sends outreach emails using Brevo

## Technologies Used

* Node.js
* Ocean.io API
* Prospeo API
* Brevo API
* Axios
* Dotenv

## Workflow

Input Domain
↓
Ocean.io Search
↓
Lookalike Companies
↓
Prospeo Search
↓
Decision Makers
↓
Prospeo Enrich
↓
Verified Email
↓
Brevo
↓
Email Outreach

## Files

* ocean-test.js
* prospeo-test.js
* enrich-test.js
* send-email.js

## Environment Variables

OCEAN_API_KEY

PROSPEO_API_KEY

BREVO_API_KEY

## Author

Arunima VK
