/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import DashboardCustomizeRoundedIcon from "@mui/icons-material/DashboardCustomizeRounded";
import { sidebarData } from "../utils/sidebarData";
import FirstPageRoundedIcon from "@mui/icons-material/FirstPageRounded";
import { drawerWidth } from "./styledComponent";
import { useTheme as themeContext } from "@mui/material/styles";
import { useSmallScreen as smallScreenContext } from "../context/smallScreeen";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
} from "@mui/material";

type props = {
  open: boolean;
  handleDrawerOpen: () => void;
};

const Sidebar = ({ open, handleDrawerOpen }: props) => {
  const { smallScreen } = smallScreenContext();
  const theme = themeContext();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "none",
        },
      }}
      variant={smallScreen ? "temporary" : "persistent"}
      anchor="left"
      open={open}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <Box
        sx={{
          padding: "1rem 1.5rem 1.5rem",
          display: "flex",
          marginRight: 0,
          gap: 3,
        }}
      >
        <img
          src="com-logo.svg"
          alt="Example SVG"
          style={{ height: "1.875rem" }}
        />
        {smallScreen && (
          <Box sx={{ cursor: "pointer", textAlign: "center" }}>
            <IconButton onClick={handleDrawerOpen}>
              <FirstPageRoundedIcon />
            </IconButton>
          </Box>
        )}
      </Box>
      <List>
        {sidebarData.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  minWidth: "30px",
                }}
              >
                <DashboardCustomizeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
