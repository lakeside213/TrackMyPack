import React, { Component, Fragment } from "react";
import Moment from "react-moment";
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
import TimeIcon from "@material-ui/icons/AccessTime";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import LocationIcon from "@material-ui/icons/LocationOn";
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
    const {
      classes,
      value,
      packageName,
      events,
      openPackageDetails,
      trackingNumber,
      pack
    } = this.props;

    return (
      <Fragment>
        <ListItem
          key={value}
          button
          onClick={() => {
            openPackageDetails(pack);
          }}
        >
          <ListItemText
            primary={<Typography variant="h6">{packageName}</Typography>}
            secondary={
              <Fragment>
                <Typography variant="body1">
                  {events[events.length - 1].status}
                </Typography>
                <Grid container>
                  {events[events.length - 1].location ? (
                    <Grid item xs={6}>
                      <Typography variant="caption">
                        <LocationIcon className={classes.icon} />{" "}
                        {events[events.length - 1].location}
                      </Typography>
                    </Grid>
                  ) : (
                    ""
                  )}

                  <Grid item xs={6}>
                    <Typography variant="caption">
                      <TimeIcon className={classes.icon} />{" "}
                      <Moment fromNow parse="YYYY-MM-DD HH:mm">{`${
                        events[events.length - 1].date
                      } ${events[events.length - 1].time}`}</Moment>
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
