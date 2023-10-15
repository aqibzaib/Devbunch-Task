import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";

import SettingsIcon from "@mui/icons-material/Settings";
import SearchBar from "./components/searchBar";
import { Badge, Hidden } from "@mui/material";
import heartIcon from "../../assets/svg-icons/heart-icon.svg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import avatarImage from "../../assets/svg-icons/avatar-image.png";
function Navbar() {
  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        backgroundColor: "#FFFFFF",
        height: "7.75rem",
        border: "1px solid #C3D4E966",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        // width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: { xs: "flex" },
            flexWrap: { xs: "wrap" },
            gap: { xs: 2 },
          }}
        >
          <Box flexGrow={0.1}>
            <Typography
              noWrap
              sx={{
                mr: 2,
                display: {
                  xs: "flex",
                  md: "flex",
                },

                fontFamily: "Plus Jakarta Sans",
                fontWeight: 700,
                fontSize: "2rem",
                lineHeight: "48px",
                color: "#3563E9",
                textDecoration: "none",
              }}
            >
              MORENT
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { sm: "flex" } }}>
            <Hidden smDown>
              <SearchBar />
            </Hidden>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Hidden mdDown>
              <IconButton
                // onClick={handleOpenUserMenu}
                sx={{ p: 1 }}
              >
                <Avatar
                  sx={{
                    width: "44px",
                    height: "44px",
                    // borderColor: "#C3D4E966",
                    border: "1px solid  #C3D4E966",
                    backgroundColor: "inherit",
                  }}
                >
                  {/* <FavoriteIcon color="action" disabled /> */}
                  {/* <SvgIcon src={{ heartIcon }} /> */}
                  <img
                    src={heartIcon}
                    style={
                      {
                        // width: "24px",
                        // height: "24px",
                      }
                    }
                  />
                </Avatar>
              </IconButton>
            </Hidden>

            <Hidden mdDown>
              <IconButton
                // onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <Avatar
                  sx={{
                    border: "1px solid  #C3D4E966",
                    backgroundColor: "inherit",
                    position: "relative",
                    width: "44px",
                    height: "44px",
                  }}
                >
                  <Badge
                    color="warning"
                    variant="dot"
                    // sx={{ position: "absolute", top: "0px", right: "3px" }}
                  >
                    <NotificationsIcon sx={{ color: "#596780" }} />
                  </Badge>
                </Avatar>
              </IconButton>
            </Hidden>
            {/* SettingsIcon */}

            <Hidden mdDown>
              <IconButton sx={{ p: 1 }}>
                <Avatar
                  sx={{
                    border: "1px solid  #C3D4E966",
                    backgroundColor: "inherit",
                    width: "44px",
                    height: "44px",
                  }}
                >
                  <SettingsIcon sx={{ color: "#596780" }} />
                </Avatar>
              </IconButton>
            </Hidden>
            <IconButton sx={{ p: 1 }}>
              <Avatar
                alt="Remy Sharp"
                src={avatarImage}
                sx={{ width: "44px", height: "44px" }}
              />
            </IconButton>
          </Box>
          <Box display={"flex"}>
            <Hidden smUp>
              <SearchBar />
            </Hidden>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
