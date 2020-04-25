import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Typography,
  Box,
  Slide,
  useScrollTrigger
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar(props) {
  return (
    <HideOnScroll {...props}>
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%"
            }}
          >
            <Box display="flex" flexDirection="row" alignItems="center">
              <IconButton>
                <Avatar />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Lorem Logo
              </Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center">
              <IconButton>
                <SearchIcon style={{ color: "#fff" }} />
              </IconButton>
              <IconButton>
                <MenuIcon style={{ color: "#fff" }} />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
