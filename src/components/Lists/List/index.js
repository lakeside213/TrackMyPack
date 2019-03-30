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
    const { classes } = this.props;

    return (
      <Fragment>
        <List className={classes.root}>
          {[0, 1, 2, 3].map(value => (
            <ListItem value={value} divider />
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
