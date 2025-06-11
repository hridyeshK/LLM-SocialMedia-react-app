import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Routes, Route } from "react-router";
import { Link } from "react-router";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import GeneratingTokensRoundedIcon from "@mui/icons-material/GeneratingTokensRounded";
import FormatListNumberedRoundedIcon from "@mui/icons-material/FormatListNumberedRounded";
import BookmarksRoundedIcon from "@mui/icons-material/BookmarksRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Profile from "./Profile";
import AskAI from "./AskAI";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import Lists from "./Lists";
import HomePage from "./HomePage";
import { BigContext } from "./GlobalContext";
import { useContext } from "react";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div"></Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link to={"/"}>
              <IconButton aria-label="Home" color="primary">
                <HomeFilledIcon fontSize="large" />
              </IconButton>
            </Link>
          </Toolbar>

          <List>
            {["Profile", "Ask AI", "Lists", "Bookmarks"].map((text) => (
              //   <Link to={`/${text}`} style={{ textDecoration: 'none' }}>
              <ListItem
                key={text}
                disablePadding
                component={Link}
                to={`/${text}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <GetIcon icon={text} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
              //   </Link>
            ))}
          </List>
          <Divider />
          <List>
            {["Settings", "Log Out"].map((text) => (
              //   <Link to={`/${text}`} style={{ textDecoration: 'none' }}>
              <ListItem
                key={text}
                disablePadding
                component={Link}
                to={`/${text}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <GetIcon icon={text} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
              //   </Link>
            ))}
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Ask AI" element={<AskAI />} />
            <Route path="/Lists" element={<Lists />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

const GetIcon = ({ icon }: { icon: string }) => {
  if (icon == "Profile")
    return (
      <>
        <AccountCircleSharpIcon color="primary" sx={{ fontSize: "35px" }} />
      </>
    );
  if (icon == "Ask AI")
    return (
      <>
        <GeneratingTokensRoundedIcon
          color="primary"
          sx={{ fontSize: "35px" }}
        />
      </>
    );
  if (icon == "Lists")
    return (
      <>
        <FormatListNumberedRoundedIcon
          color="primary"
          sx={{ fontSize: "35px" }}
        />
      </>
    );
  if (icon == "Bookmarks")
    return (
      <>
        <BookmarksRoundedIcon color="primary" sx={{ fontSize: "35px" }} />
      </>
    );
  if (icon == "Settings")
    return (
      <>
        <SettingsIcon color="primary" sx={{ fontSize: "35px" }} />
      </>
    );
  if (icon == "Log Out")
    return (
      <>
        <LogoutIcon color="primary" sx={{ fontSize: "35px" }} />
      </>
    );
  if (icon == "Home")
    return (
      <>
        <HomeFilledIcon color="primary" sx={{ fontSize: "35px" }} />
      </>
    );
};
