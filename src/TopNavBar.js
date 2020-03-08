import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Dialog} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import classes from "./TopNavBar.module.css";
import { SettingsModal } from "./SettingsModal";

const TopNavBar = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          WeakCal
        </Typography>
        <IconButton color="inherit" onClick={() => setModalOpen(true)}>
          <SettingsIcon />
        </IconButton>
        <Dialog open={isModalOpen} onClose={() => setModalOpen(false)}>
          <SettingsModal />
        </Dialog>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
