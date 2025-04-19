
# SendGrid Setup for Contact Form

To make the contact form in imsouane.html work:

1. Create a free SendGrid account at https://sendgrid.com
2. Generate an API Key (Settings > API Keys > Create API Key)
3. Use a server-side script (Node, Python, PHP) or backend service to POST form data to SendGrid API
   OR
   Use a static form service like Formspree or Netlify Forms
4. For production, DO NOT use SendGrid's API directly from HTML (your key will be exposed)

Recommended: Set up a backend to forward form submissions to SendGrid via HTTPS.

Optional Tools:
- Netlify Forms
- Formspree
- Google Firebase + Functions
