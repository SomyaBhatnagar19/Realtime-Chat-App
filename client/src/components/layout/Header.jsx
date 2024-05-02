import { Box, AppBar, Toolbar, Typography, IconButton, Backdrop } from "@mui/material";
import React, { useState, Suspense, lazy } from "react";
import { purple } from "../../constants/colors";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Group as GroupIcon,
  Logout as LogoutIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const navigate = useNavigate();

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };

  const openSearch = () => {
    setIsSearch((prev) => !prev);
  };

  const openNewGroup = () => {
    setIsNewGroup((prev) => !prev);
  };

  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };

  const navigateToGroup = () => {
    navigate("/groups");
  };

  const logoutHandler = () => {
    console.log("logoutHandler");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar position="static" sx={{ bgcolor: "purple" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Chit ChatZ
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box
              sx={{
                display: { xs: "block", sm: "block", lg: "block" },
              }}
            >
              <IconButton color="inherit" onClick={openSearch}>
                <SearchIcon />
              </IconButton>

              <IconButton
                title={"New Group"}
                color="inherit"
                // icon={<AddIcon />}
                onClick={openNewGroup}
              >
                +
              </IconButton>

              <IconButton
                title={"Manage Groups"}
                color="inherit"
                // icon={<GroupIcon />}
                onClick={navigateToGroup}
              >
                <GroupIcon />
              </IconButton>

              <IconButton
                title={"Notifications"}
                color="inherit"
                // icon={<NotificationsIcon />}
                onClick={openNotification}
                // value={notificationCount}
              >
                <NotificationsIcon />
              </IconButton>

              <IconButton
                title={"Logout"}
                color="inherit"
                // icon={<LogoutIcon />}
                onClick={logoutHandler}
              >
                <LogoutIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}

      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

export default Header;
