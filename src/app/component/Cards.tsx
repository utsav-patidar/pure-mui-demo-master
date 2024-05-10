import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { cardData } from "../utils/data";
import theme from "../../app/theme/defaultTheme";

const Cards = () => {
  const cardStyles = {
    borderRadius: ".5rem",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    backgroundColor: theme.palette.white.main,
    color: theme.palette.text.primary,
    p: "24px",
  };

  const cardImageStyle = {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "0.5rem",
    backgroundColor: "rgba(98,75,255,.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {cardData.map(({ title, src, number, completed }, index) => (
        <Box
          key={index}
          sx={{
            width: ["100%", "50%", "50%", "25%"], // Responsive widths
            p: "1rem",
          }}
        >
          <Box
            sx={{
              ...cardStyles,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography variant="h6" sx={{ mb: 0, fontWeight: "bold" }}>
                {title}
              </Typography>
              <Box
                sx={{
                  ...cardImageStyle,
                }}
              >
                <Image src={src} alt={title} width={24} height={24} />
              </Box>
            </Box>
            <Box sx={{ lineHeight: 1.25 }}>
              <Typography
                variant="h5"
                sx={{ mb: 1, fontWeight: "700", fontSize: "1.875rem" }}
              >
                {number}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <span>{completed}</span> completed
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Cards;
