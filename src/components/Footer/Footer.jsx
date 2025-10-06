import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Link as MuiLink,
  useMediaQuery,
} from "@mui/material";
import appstore from "../../assets/appstore.png";
import playstore from "../../assets/google.png";
import In from "../../assets/inLogo.png";
import Instagram from "../../assets/instagram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const isMobile584 = useMediaQuery("(max-width:584px)");

  const iconStyle = {
    width: isMobile584 ? 32 : 26,
    height: isMobile584 ? 32 : 26,
    cursor: "pointer",
  };
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Our Services", path: "/our-services" },
    { label: "FAQ", path: "/faq" },
  ];

  const helpLinks = [
    { label: "Customer Support", path: "/customerSupport" },
    { label: "Terms & Conditions", path: "/terms-and-conditions" },
    { label: "Privacy Policy", path: "/privacypolicy" },
    { label: "Cancellation & Refunds", path: "/cancellation-and-refunds" },
  ];


    const contactLinks = [
    { label: "Contact Us", path: "/Contact-Us" },
  ];
  return (
    <Box
      sx={{
        bgcolor: "#FAFAFA",
        color: "#333",
        mt: 8,
        px: { xs: 3, sm: 4, md: 6 },
        pt: { xs: 6, sm: 8 },
        pb: { xs: 4, sm: 6 },
        fontFamily: "Urbanist, sans-serif",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ maxWidth: "1200px", mx: "auto", textAlign: "left" }}
      >
        <Grid item xs={12} md={2}>
          <Typography fontWeight={600} fontSize="16px" gutterBottom>
            Quick Links
          </Typography>
          {quickLinks.map(({ label, path }) => (
            <Typography
              key={label}
              fontSize="14px"
              color="text.secondary"
              mb={0.5}
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                display: "block",
              }}
              component={Link}
              to={path}
              underline="none"
            >
              {label}
            </Typography>
          ))}
        </Grid>



         <Grid item xs={12} md={2}>
          <Typography fontWeight={600} fontSize="16px" gutterBottom>
            Help
          </Typography>
          {helpLinks.map(({ label, path }) => (
            <Typography
              key={label}
              fontSize="14px"
              color="text.secondary"
              mb={0.5}
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                display: "block",
              }}
              component={Link}
              to={path}
              underline="none"
            >
              {label}
            </Typography>
          ))}
        </Grid>

 
         <Grid item xs={12} md={2}>
          <Typography fontWeight={600} fontSize="16px" gutterBottom>
            Contact
          </Typography>
          {contactLinks.map(({ label, path }) => (
            <Typography
              key={label}
              fontSize="14px"
              color="text.secondary"
              mb={0.5}
              sx={{
                cursor: "pointer",
                textDecoration: "none",
                display: "block",
              }}
              component={Link}
              to={path}
              underline="none"
            >
              {label}
            </Typography>
          ))}
        </Grid>


        <Grid item xs={12} md={3}>
          <Typography fontWeight={600} fontSize="16px" gutterBottom>
            Install App Now Available
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile584 ? "row" : "column",
              gap: 1,
              mt: 1,
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <img
              src={appstore}
              alt="App Store"
              style={{
                width: isMobile584 ? "40%" : 140,
                cursor: "pointer",
              }}
              onClick={() => window.open("https://apps.apple.com/", "_blank")}
            />
            <img
              src={playstore}
              alt="Google Play"
              style={{
                width: isMobile584 ? "40%" : 140,
                cursor: "pointer",
              }}
              onClick={() =>
                window.open("https://play.google.com/store", "_blank")
              }
            />
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ mt: 1, mb: 4, maxWidth: "1200px", mx: "auto" }} />
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: 1,
          overflow: "hidden",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © Copyright 2025. All Rights Reserved by Easha 24x7 Health Care Pvt
          Ltd
        </Typography>

        <Box sx={{ display: "flex", gap: 2, width: 200 }}>
          <MuiLink
            href="https://www.linkedin.com/company/easha24x7-healthcare-private-limited/"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={In} alt="linkedin" style={iconStyle} />
          </MuiLink>

          <MuiLink
            href="https://www.instagram.com/easha.health/?hl=en"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" style={iconStyle} />
          </MuiLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
