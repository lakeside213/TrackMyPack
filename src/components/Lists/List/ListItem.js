import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import LocalShipping from "@material-ui/icons/LocalShipping";
import Store from "@material-ui/icons/Store";
import MoreVert from "@material-ui/icons/MoreVert";
import AccessTime from "@material-ui/icons/AccessTime";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import LocationCity from "@material-ui/icons/LocationCity";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    width: "100%",

    backgroundColor: theme.palette.background.paper
  },
  icon: {
    marginBottom: "-7px"
  }
});

class CheckboxListSecondary extends Component {
  render() {
    const { classes, value } = this.props;

    return (
      <Fragment>
        <ListItem key={value} button>
          <ListItemText
            primary={"Smasung galaxy ace "}
            secondary={
              <Fragment>
                <Typography variant="body1">
                  Packet delievered to in Aachen
                </Typography>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="caption">
                      <LocationCity className={classes.icon} />{" "}
                      Cottbus,Deutschland
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="caption">
                      <AccessTime className={classes.icon} /> 8 mins ago
                    </Typography>
                  </Grid>
                </Grid>
              </Fragment>
            }
          />
          <ListItemSecondaryAction>
            <IconButton aria-label="Comments">
              <MoreVert />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </Fragment>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CheckboxListSecondary);
