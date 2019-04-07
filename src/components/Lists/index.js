import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Fab from "@material-ui/core/Fab";
import Home from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import LocalShipping from "@material-ui/icons/LocalShipping";
import Store from "@material-ui/icons/Store";
import Check from "@material-ui/icons/Check";
import List from "./List";
function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    height: "100%"
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const {
      classes,
      theme,
      createToggler,
      packages,
      openPackageDetails
    } = this.props;
    let inTransitPackages = packages.filter(function(pack) {
      return pack.isDelivered === false;
    });
    let deliveredPackages = packages.filter(function(pack) {
      return pack.isDelivered === true;
    });
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            variant="fullWidth"
          >
            <Tab label="In Transit" icon={<LocalShipping />} />
            <Tab label="Delivered" icon={<Check />} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <List
            dir={theme.direction}
            packages={inTransitPackages}
            openPackageDetails={openPackageDetails}
          />
          <List
            dir={theme.direction}
            packages={deliveredPackages}
            openPackageDetails={openPackageDetails}
          />
        </SwipeableViews>
        <Fab
          size="medium"
          color="secondary"
          aria-label="Add"
          className={classes.fab}
          onClick={() => {
            createToggler();
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
