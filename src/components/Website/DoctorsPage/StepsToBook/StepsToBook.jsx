import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import SearchIcon from "../../../../assets/search.svg";
import Done from "../../../../assets/done.svg";
import CalendarTodayIcon from "../../../../assets/Daterange.svg";

const steps = [
  {
    icon: SearchIcon,
    title: "Find Doctor",
    description:
      "Explore verified professionals across various specialties to find the one that fits your needs.",
  },
  {
    icon: Done,
    title: "Check Doctor Profile",
    description:
      "Check experience, patient reviews, consultation modes, and availability in one place.",
  },
  {
    icon: CalendarTodayIcon,
    title: "Book Appointment",
    description:
      "Choose your preferred time and consultation method—clinic visit or virtual—and confirm.",
  },
];

const EasySteps = () => {
  return (
    <Box
      sx={{
        maxWidth: "1200px",
        mx: "auto",
        textAlign: "center",
        mt: 10,
        px: 2,
      }}
    >
      <Typography
        variant="h5"
        fontWeight={600}
        fontSize={{ xs: "22px", sm: "26px", md: "31px" }}
        mb={6}
      >
        Easy Steps to Book Your Doctor
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", lg: "nowrap" },
          justifyContent: "center",
          gap: { xs: 3, sm: 5, lg: 4 },
        }}
      >
        {steps.map((step, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", sm: "300px", lg: "33.33%" },
              maxWidth: "312px",
              px: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "@media (max-width:425px)": {
                width: "100% !important",
                maxWidth: "100% !important",
              },
            }}
          >
            <Avatar
              sx={{
                bgcolor: "#A9D8DC",
                width: 60,
                height: 60,
                mb: 2,
              }}
            >
              <img
                src={step.icon}
                alt={step.title}
                style={{
                  width: 28,
                  height: 28,
                  objectFit: "contain",
                }}
              />
            </Avatar>
            <Typography
              fontWeight={500}
              fontSize={{ xs: "20px", sm: "22px", md: "24px" }}
              gutterBottom
            >
              {step.title}
            </Typography>
            <Typography
              fontWeight={400}
              fontSize={{ xs: "15px", sm: "16px", md: "18px" }}
              color="text.secondary"
              sx={{ lineHeight: 1.6, px: { xs: 1, md: 0 } }}
            >
              {step.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default EasySteps;
