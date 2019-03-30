import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

const styles = theme => ({
  root: {
    width: "100%"
  }
});

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function SimpleList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="subtitle2">
                Packet was scuccesfully delivered
              </Typography>
            }
            secondary="Cottbus,Deutschland"
          />
          <ListItemSecondaryAction>
            <ListItemText primary={"15.jan"} secondary="09.27" />
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="subtitle2">
                Packet was scuccesfully delivered
              </Typography>
            }
            secondary="Cottbus,Deutschland"
          />
          <ListItemSecondaryAction>
            <ListItemText primary={"15.jan"} secondary="09.27" />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
