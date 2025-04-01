import { MoreVert } from "@mui/icons-material";
import { NavLink } from "react-router";
import { getHeaderLinks, Page } from "../constants";

import logo from "../img/logo.jpg";
import words from "../img/logo-words.jpg";
import {
  Box,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Link,
} from "@mui/material";
import { useState } from "react";

export default function PrimarySearchAppBar() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const headerPages: Page[] = getHeaderLinks();

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  /* eslint-disable-next-line */
  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {headerPages.map((page: Page) => (
        <MenuItem key={page.title} onClick={handleMobileMenuClose}>
          <Link component={NavLink} to={page.link}>
            {page.title}
          </Link>
        </MenuItem>
      ))}
      <MenuItem onClick={handleMobileMenuClose}>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          href="https://everythingpaws.gingrapp.com/front_end/login/email"
          target="_blank"
        >
          Log In
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <nav style={{ position: "relative", zIndex: 100 }}>
      <AppBar position="relative" style={{ height: "25px", zIndex: 100 }}>
        <Toolbar style={{ minHeight: "25px" }}></Toolbar>
      </AppBar>
      <AppBar position="static" color="transparent">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <NavLink to="/">
            <Box
              component="img"
              src={logo}
              alt="Everything is Pawsible logo"
              sx={(theme) => ({
                height: theme.spacing(7),
                "&:hover": {
                  cursor: "pointer",
                },
                [theme.breakpoints.down("xs")]: {
                  display: "none",
                },
                zIndex: 100,
              })}
            />
          </NavLink>
          <Box
            sx={(theme) => ({
              [theme.breakpoints.up("lg")]: {
                position: "absolute",
                width: "100%",
                textAlign: "center",
              },
              [theme.breakpoints.down("md")]: {
                flex: 1,
              },
            })}
          >
            <NavLink to="/">
              <Box
                component="img"
                src={words}
                alt="Everything is Pawsible"
                sx={(theme) => ({
                  height: theme.spacing(7),
                  "&:hover": {
                    cursor: "pointer",
                  },
                })}
              />
            </NavLink>
          </Box>
          <Box
            sx={(theme) => ({
              display: "none",
              [theme.breakpoints.up("md")]: {
                display: "flex",
              },
              "& a": {
                padding: theme.spacing(1),
              },
              zIndex: 100,
            })}
          >
            {headerPages.map((page: Page) => (
              <Link
                key={page.title}
                component={NavLink}
                to={page.link}
                color="textSecondary"
                underline="hover"
                className="nav-link"
              >
                {page.title}
              </Link>
            ))}
            <Button
              size="small"
              color="primary"
              variant="outlined"
              sx={{ mx: 0.5 }}
              href="https://everythingpaws.gingrapp.com/front_end/login/email"
              target="_blank"
            >
              Log In
            </Button>
          </Box>
          <Box
            sx={(theme) => ({
              display: "flex",
              [theme.breakpoints.up("md")]: {
                display: "none",
              },
            })}
          >
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreVert />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </nav>
  );
}
