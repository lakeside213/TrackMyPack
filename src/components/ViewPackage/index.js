import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Moment from "react-moment";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "./Appbar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ArrowForward from "@material-ui/icons/ArrowForward";
import Slide from "@material-ui/core/Slide";
import Timeline from "./Timeline";
import EditPackage from "./EditPackage";
const styles = {
  flex: {
    flex: 1
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  render() {
    const { classes, open, closePackageDetails, data } = this.props;
    if (data) {
      return (
        <Fragment>
          <Dialog
            fullScreen
            open={open}
            onClose={closePackageDetails}
            TransitionComponent={Transition}
          >
            <AppBar
              packageName={data.packageName}
              closePackageDetails={closePackageDetails}
            />

            <List>
              <ListItem button>
                <ListItemText
                  primary={data.courier}
                  secondary={data.trackingNumber}
                />
              </ListItem>

              <Divider />
            </List>
            <Typography variant="caption" gutterBottom align="center">
              Last updated{" "}
              {data.events ? (
                <Moment fromNow parse="YYYY-MM-DD HH:mm">{`${
                  data.events[data.events.length - 1].date
                } ${data.events[data.events.length - 1].time}`}</Moment>
              ) : (
                ""
              )}
            </Typography>

            <Timeline events={data.events} />
          </Dialog>
          <EditPackage />
        </Fragment>
      );
    }
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullScreenDialog);
