import React from "react";
import { Box, Typography, Container } from "@mui/material";

const CancellationAndRefunds = () => {
  return (
    <Container maxWidth="md" sx={{ py: 12 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Cancellation and Refund Policy
      </Typography>

      <Typography variant="body1" paragraph>
        At <strong>N Pruthviraj</strong>, we believe in helping our customers as much as possible and have
        therefore adopted a liberal cancellation and refund policy.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        Cancellation Policy
      </Typography>
      <Box component="ul" sx={{ pl: 2, listStyle: "disc" }}>
        <li>
          <Typography variant="body1">
            Cancellations will be considered only if the request is made within <strong>3–5 days</strong> of placing the order.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Cancellation may not be accepted if the order has already been processed or shipped by the vendor or merchant.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Cancellations are not accepted for <strong>perishable items</strong> such as flowers, food, or similar goods.
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            Refunds or replacements may be issued if the product delivered is found to be of poor quality or defective.
          </Typography>
        </li>
      </Box>

      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 3 }}>
        Damaged or Defective Products
      </Typography>
      <Typography variant="body1" paragraph>
        In case you receive a damaged or defective product, please report it to our Customer Service Team
        within <strong>3–5 days</strong> of receiving the order. The complaint will be processed only after the merchant/vendor
        verifies and confirms the issue on their end.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        Product Not as Described
      </Typography>
      <Typography variant="body1" paragraph>
        If you feel that the product received is not as shown on the website or does not meet your expectations,
        please notify our Customer Service within <strong>3–5 days</strong> of delivery. The team will assess your complaint
        and make a fair decision.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        Manufacturer Warranty Products
      </Typography>
      <Typography variant="body1" paragraph>
        For products that come with a manufacturer’s warranty, please contact the manufacturer directly
        for support, replacement, or service under warranty.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        Refund Processing
      </Typography>
      <Typography variant="body1" paragraph>
        If your refund request is approved by <strong>N Pruthviraj</strong>, it will be processed within <strong>3–5 working days</strong>
        and credited back to the original payment method used by the customer.
      </Typography>
    </Container>
  );
};

export default CancellationAndRefunds;
