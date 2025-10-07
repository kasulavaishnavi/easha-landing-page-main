import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Avatar,
  Stack,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import Avatar1 from "../../assets/Avatar1.png";
import Avatar2 from "../../assets/avatar2.png";
import Avatar3 from "../../assets/Avatar3.png";

const GetInTouch = () => {
  const [email, setEmail] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setSnackbar({ open: true, message: "Please enter a valid email address", severity: "error" });
      return;
    }

    const payload = {
      access_key: "05f47beb-d9e4-4c10-8916-67a61e02676a",
      email,
      message: "A user is trying to get in touch via email only.",
      to: "0099vaish@gmail.com",
      subject: "New Get In Touch Submission",
    };

    try {
      setLoading(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (data.success) {
        setSnackbar({ open: true, message: "Thank you! We’ll get in touch soon.", severity: "success" });
        setEmail("");
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSnackbar({ open: true, message: "Something went wrong. Please try again.", severity: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "70%", sm: "70%", md: "70%", lg: "1160px" },
        bgcolor: "#eaf6f7",
        borderTopRightRadius: { xs: "40px", sm: "80px", lg: "120px" },
        borderBottomLeftRadius: { xs: "40px", sm: "80px", lg: "120px" },
        padding: { xs: "20px", sm: "28px", lg: "32px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        mx: "auto",
        mt: { xs: "40px", sm: "80px", lg: "120px" },
      }}
    >
      <Stack
        direction="row"
        spacing={-2.0}
        justifyContent="center"
        sx={{
          flexWrap: { xs: "wrap", sm: "nowrap" },
          gap: { xs: "8px", sm: "0px" },
        }}
      >
        {[Avatar1, Avatar2, Avatar3].map((src, index) => (
          <Avatar
            key={index}
            src={src}
            alt={`Team member ${index + 1}`}
            sx={{
              width: { xs: 40, sm: 48 },
              height: { xs: 40, sm: 48 },
              border: "2px solid white",
              zIndex: 4 - index,
            }}
          />
        ))}
      </Stack>

      <Typography
        variant="h6"
        fontWeight={500}
        color="#252525"
        sx={{
          fontSize: { xs: "16px", sm: "18px", lg: "20px" },
          textAlign: "center",
        }}
      >
        Still have questions?
      </Typography>

      <Typography
        variant="body2"
        fontWeight={400}
        sx={{
          color: "#494949",
          maxWidth: 500,
          textAlign: "center",
          fontSize: { xs: "14px", sm: "15px" },
        }}
      >
        Can't find the answer you're looking for? Please chat to our friendly team.
      </Typography>

      <TextField
        placeholder="Ex: abc@gmail.com"
        value={email}
        onChange={handleEmailChange}
        variant="outlined"
        InputProps={{
          sx: {
            borderRadius: "28px",
            bgcolor: "#fff",
            height: 48,
            px: 2,
            fontSize: "14px",
            gap: "8px",
            mt: 2,
          },
        }}
        sx={{
          width: { xs: "100%", sm: 320 },
          maxWidth: "100%",
          input: {
            textAlign: "center",
            color: "#6c757d",
            fontSize: { xs: "14px", sm: "14px" },
          },
        }}
      />

      <Button
        variant="contained"
        onClick={handleSubmit}
        disabled={loading}
        sx={{
          bgcolor: "#00917F",
          color: "#fff",
          px: { xs: 3, sm: 4 },
          py: 1.5,
          mt: 2,
          fontSize: { xs: "14px", sm: "14px" },
          borderRadius: "999px",
          textTransform: "none",
          "&:hover": {
            bgcolor: "#007f6f",
          },
        }}
      >
        {loading ? "Sending..." : "Get in touch"}
      </Button>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default GetInTouch;
