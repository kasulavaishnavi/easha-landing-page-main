import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" sx={{ py: 12 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Terms and Conditions
      </Typography>

      <Typography variant="body1" paragraph>
        For the purpose of these Terms and Conditions, the terms "we", "us", "our" refer to <strong>N Pruthviraj</strong>,
        whose registered/operational office is at Plat no-78, 7-1-212/A/63, Shivbagh Colony, Ameerpet,
        Prakashamnagar, Hyderabad, Secunderabad, Telangana – 500016.
        <br />
        The terms "you", "your", "user", or "visitor" refer to any natural or legal person using our website or
        purchasing from us.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        1. Website Use
      </Typography>
      <Typography variant="body1" paragraph>
        Your use of this website and/or any purchase made from us is subject to the following terms:
        The content on this website may change without notice. We or third parties do not provide any
        warranty or guarantee regarding accuracy, performance, completeness, or suitability of the
        information for any specific purpose.
      </Typography>

      <Typography variant="body1" paragraph>
        You acknowledge that such content may contain inaccuracies or errors, and we exclude liability
        for such inaccuracies to the fullest extent permitted by law.
        Your use of any materials or services on this site is entirely at your own risk, and it is your
        responsibility to ensure that any products, services, or information meet your requirements.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        2. Intellectual Property
      </Typography>
      <Typography variant="body1" paragraph>
        This website contains material owned or licensed to us, including (but not limited to) the design,
        layout, appearance, and graphics. Reproduction is prohibited unless in accordance with the copyright
        notice.
        <br />
        All trademarks not owned by us are acknowledged. Unauthorized use of our materials or data may lead
        to claims for damages and/or criminal prosecution.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        3. External Links
      </Typography>
      <Typography variant="body1" paragraph>
        Our website may include links to other websites for your convenience. These do not signify endorsement.
        We are not responsible for the content of any linked sites.
        <br />
        You may not create a link to our website from another site or document without prior written consent
        from <strong>N Pruthviraj</strong>.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        4. Transactions and Payments
      </Typography>
      <Typography variant="body1" paragraph>
        We shall not be liable for any loss or damage arising from the decline of authorization for any
        transaction due to the cardholder exceeding the limit agreed between them and the acquiring bank.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        5. Legal Jurisdiction
      </Typography>
      <Typography variant="body1" paragraph>
        Any dispute arising out of your use of the website or purchases made with us will be governed by
        the laws of India. Legal jurisdiction will lie with the competent courts of Hyderabad, Telangana, India.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        6. Modifications
      </Typography>
      <Typography variant="body1" paragraph>
        We reserve the right to modify these terms at any time. Changes will be updated on this page, and
        you are advised to review them regularly.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        7. Contact Information
      </Typography>
      <Typography variant="body1" paragraph>
        If you have questions regarding these Terms and Conditions, please contact us:
      </Typography>
      <Box sx={{ pl: 2 }}>
        <Typography variant="body1">
          <strong>Address:</strong> Plat no-78, 7-1-212/A/63, Shivbagh Colony, Ameerpet, Prakashamnagar,
          Hyderabad, Secunderabad, Telangana – 500016
        </Typography>
        <Typography variant="body1">
          <strong>Phone:</strong> +91 63016 80400
        </Typography>
        <Typography variant="body1">
          <strong>Email:</strong>{" "}
          <Link href="mailto:contact@eashaop.com" underline="hover">
            contact@eashaop.com
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
