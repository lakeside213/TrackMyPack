import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "./ListItem";
const styles = theme => ({
  root: {
    width: "100%",

    backgroundColor: theme.palette.background.paper
  }
});

class CheckboxListSecondary extends Component {
  render() {
    const { classes, packages, openPackageDetails } = this.props;

    return (
      <Fragment>
        <List className={classes.root}>
          {packages.map(pack => (
            <ListItem
              packName={pack.packageName}
              value={pack.index}
              trackingNumber={pack.trackingNumber}
              events={pack.events}
              packageName={pack.packageName}
              pack={pack}
              divider
              openPackageDetails={openPackageDetails}
            />
          ))}
        </List>
      </Fragment>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckboxListSecondary);
