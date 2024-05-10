import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Image from "next/image";
import { data3 } from "../utils/data";
import { Box, Grid, LinearProgress, Divider } from "@mui/material";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import { useTheme as themeContext } from "@mui/material/styles";
import { useSmallScreen as smallScreenContext } from "../context/smallScreeen";

const TableContent = () => {
  const { smallScreen } = smallScreenContext();
  const theme = themeContext();

  return (
    <Box sx={{ padding: "1rem", width: "100%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Paper
            sx={{
              borderRadius: ".5rem",
            }}
          >
            <Box sx={{ px: 2, py: 2, borderBottomWidth: "1px" }}>
              <Typography variant="h6" sx={{ fontWeight: "400" }}>
                Active Projects
              </Typography>
            </Box>
            <TableContainer style={{ maxWidth: "100%", overflowX: "auto" }}>
              <Table sx={{ width: smallScreen ? "max-content" : "100%" }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Project name</TableCell>
                    <TableCell>Hours</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>Members</TableCell>
                    <TableCell>Progress</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data3.map((x, key) => {
                    let priorityClass = "";
                    switch (x.priority) {
                      case "Medium":
                        priorityClass = "priority-medium";
                        break;
                      case "High":
                        priorityClass = "priority-high";
                        break;
                      case "Low":
                        priorityClass = "priority-low";
                        break;
                      case "Track":
                        priorityClass = "priority-track";
                        break;
                      default:
                        break;
                    }
                    return (
                      <TableRow key={key}>
                        <TableCell sx={{ display: "flex", gap: 2 }}>
                          <Avatar
                            src={x.src}
                            alt={x.p_name}
                            sx={{ width: 35, height: 35 }}
                          />
                          <div style={{ paddingTop: "5px" }}>{x.p_name}</div>
                        </TableCell>
                        <TableCell>{x.hrs}</TableCell>
                        <TableCell>
                          <span className={`priority-text ${priorityClass}`}>
                            {x.priority}
                          </span>
                        </TableCell>
                        <TableCell>
                          <AvatarGroup sx={{ float: "left" }}>
                            {[0, 1, 2, 3].map((number, index) => (
                              <Avatar
                                key={number}
                                alt={`Avatar ${number}`}
                                src={`https://i.pravatar.cc/300?img=${number}`}
                                sx={{
                                  width: 30,
                                  height: 30,
                                  position: "relative",
                                  zIndex: index + 1,
                                  left: index === 0 ? 0 : -((index - 1) * 6),
                                }}
                              />
                            ))}
                            <Avatar
                              sx={{
                                width: 30,
                                height: 30,
                                position: "relative",
                                zIndex: 10,
                                left: "-24px",
                                backgroundColor: "blue",
                                fontSize: "12px",
                              }}
                            >
                              <span>5+</span>
                            </Avatar>
                          </AvatarGroup>
                        </TableCell>
                        <TableCell>
                          <Box display="flex" width="6rem">
                            <Typography>{x.progress}</Typography>
                            <Box width="100%" marginTop="6px" marginLeft="6px">
                              <LinearProgress
                                variant="determinate"
                                value={parseFloat(x.progress)} // assuming x.progress is a string representing a percentage
                                sx={{
                                  borderRadius: "9999px",
                                  height: "0.375rem",
                                  "& .MuiLinearProgress-bar": {
                                    borderRadius: "9999px",
                                    backgroundColor:
                                      x.progress === "100%"
                                        ? "#4AFA9A"
                                        : "#4299E1",
                                  },
                                }}
                              />
                            </Box>
                          </Box>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            {/* Card footer */}
            <Box
              sx={{
                paddingX: 3,
                paddingY: 2,
                borderTop: "1px solid #e2e8f0", // Simulating Tailwind's border-t
                textAlign: "center",
              }}
            >
              <Button variant="text" color="primary">
                <Typography variant="button">View All Projects</Typography>
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TableContent;
