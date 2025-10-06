import React from "react";
import { Box, Typography, Container } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 11 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Privacy Policy
      </Typography>

      <Typography variant="body1" paragraph>
        This privacy policy sets out how <strong>N Pruthviraj</strong> uses and protects any information
        that you give when you visit the website or purchase from us. We are committed to ensuring
        that your privacy is protected. Any information you provide will only be used in accordance
        with this privacy statement.
      </Typography>

      <Typography variant="body1" paragraph>
        We may collect the following information: name, contact info (including email), demographic
        info (such as postcode, preferences), and any other information relevant to surveys or offers.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        What we do with your information:
      </Typography>
      <Box component="ul" sx={{ pl: 2, listStyle: "disc" }}>
        <li>
          <Typography variant="body1">
            Internal record keeping and service improvement
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Promotional emails about new products, offers, or information you may find interesting
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Market research contact via email, phone, fax, or mail
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Website customization according to your interests
          </Typography>
        </li>
      </Box>

      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 3 }}>
        Cookies:
      </Typography>
      <Typography variant="body1" paragraph>
        A cookie is a small file placed on your device to help analyze web traffic or tailor website
        behavior. We use cookies to understand which pages are used and improve our website accordingly.
        Cookies do not give us access to your computer or personal data other than what you choose to share.
        You can choose to accept or decline cookies through your browser settings.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        Controlling your personal information:
      </Typography>
      <Typography variant="body1" paragraph>
        You may restrict the use of your personal information by:
      </Typography>
      <Box component="ul" sx={{ pl: 2, listStyle: "disc" }}>
        <li>
          <Typography variant="body1">
            Opting out of direct marketing when filling out forms on the website
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Contacting us anytime to withdraw consent at contact@eashaop.com
          </Typography>
        </li>
      </Box>

      <Typography variant="body1" paragraph>
        We do not sell or lease your personal data to third parties unless required by law or with your permission.
        We may send third-party promotional info if you consent to it.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        Data Security:
      </Typography>
      <Typography variant="body1" paragraph>
        We are committed to keeping your data secure. Suitable physical, electronic, and managerial procedures
        are in place to safeguard and secure the information we collect online.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        Contact Us:
      </Typography>
      <Typography variant="body1" paragraph>
        If you believe any information we have is incorrect or incomplete, please contact us as soon as possible:
      </Typography>
      <Box sx={{ pl: 2 }}>
        <Typography variant="body1">
          <strong>Address:</strong> Plat no-78, 7-1-212/A/63, Shivbagh Colony, Ameerpet, Prakashamnagar,
          Hyderabad, Secunderabad, Telangana, India – 500016
        </Typography>
        <Typography variant="body1">
          <strong>Phone:</strong> 6301680400
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong> contact@eashaop.com
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
