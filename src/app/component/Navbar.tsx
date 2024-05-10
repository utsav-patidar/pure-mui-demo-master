import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import { CustomAppBar, StyledBadge } from "./styledComponent";
import { useTheme as themeContext } from "@mui/material/styles";
import { useSmallScreen as smallScreenContext } from "../context/smallScreeen";
import { Typography } from "@mui/material";
type props = {
  open: boolean;
  handleDrawerOpen: () => void;
};

const Navbar = ({ open, handleDrawerOpen }: props) => {
  const { smallScreen } = smallScreenContext();
  const theme = themeContext();

  return (
    <CustomAppBar position="fixed" open={open} sx={{}}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {(!smallScreen || (smallScreen && !open)) && (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2 }}
            >
              <FormatAlignLeftIcon sx={{ color: "#637381" }} />
            </IconButton>
            <TextField size="small" placeholder="Search" />
          </div>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "22px",
            padding: "14px",
            cursor: "pointer",
          }}
        >
          <Typography>
            <NotificationsNoneIcon sx={{ color: theme.palette.black.main }} />
          </Typography>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt="Remy Sharp" src="chart.svg" />
          </StyledBadge>
        </div>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
