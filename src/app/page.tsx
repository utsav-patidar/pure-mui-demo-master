"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import Cards from "./component/Cards";
import Table from "./component/Table";
import Table1 from "./component/Table1";
import Table2 from "./component/Table2";
import { Box, Typography, Button, Paper, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import { DrawerHeader, Main } from "./component/styledComponent";
import Image from "next/image";
import theme from "./theme/defaultTheme";

const Page = () => {
  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const [open, setOpen] = React.useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        background: theme.palette["bg-body-white"]?.main,
      }}
    >
      <CssBaseline />
      <Navbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Main
        open={open}
        sx={{ minHeight: "100vh", overflowX: "auto", maxWidth: "100%" }}
      >
        <DrawerHeader />
        <Box
          sx={{
            height: "10rem",
            backgroundColor: theme.palette.violet.main,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "40px 20px 0px 20px",
            }}
          >
            <Typography
              variant="h5"
              color={theme.palette.white.main}
              fontWeight="bold"
            >
              Projects
            </Typography>
            <Button variant="contained" color="white">
              Create New Project
            </Button>
          </Box>
          <Box sx={{ paddingTop: ".5rem" }}>
            <Cards />
          </Box>
          <Table />
          <Grid container spacing={3} padding={"1rem"}>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  borderRadius: ".5rem",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box sx={{ px: 2, py: 2, borderBottomWidth: "1px" }}>
                  <Typography variant="h6" sx={{ fontWeight: "400" }}>
                    Tasks Performance
                  </Typography>
                </Box>
                <Divider />
                <Box mt={5} mb={5} textAlign={"center"}>
                  <Image
                    src="chart.svg"
                    alt="Example SVG"
                    width={235}
                    height={235}
                  />
                </Box>
                <Box display="flex" justifyContent="center">
                  <Box flex={1} textAlign="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <Typography variant="h4" component="h1" gutterBottom>
                      76%
                    </Typography>
                    <Typography variant="body1">Completed</Typography>
                  </Box>
                  <Box flex={1} textAlign="center" mb={1.5}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                      <polyline points="17 6 23 6 23 12"></polyline>
                    </svg>
                    <Typography variant="h4" component="h1" gutterBottom>
                      32%
                    </Typography>
                    <Typography variant="body1">In-Progress</Typography>
                  </Box>
                  <Box flex={1} textAlign="center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                      <polyline points="17 18 23 18 23 12"></polyline>
                    </svg>
                    <Typography variant="h4" component="h1" gutterBottom>
                      13%
                    </Typography>
                    <Typography variant="body1">Behind</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Table2 />
            </Grid>
          </Grid>
        </Box>
      </Main>
    </Box>
  );
};

export default Page;
