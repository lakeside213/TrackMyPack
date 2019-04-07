import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
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
  const { classes, events } = props;
  return (
    <div className={classes.root}>
      <List>
        {events.map(event => (
          <Fragment>
            <ListItem button divider>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="subtitle2">{event.status}</Typography>
                }
                secondary={event.location}
              />
              <ListItemSecondaryAction>
                <ListItemText
                  primary={
                    <Moment fromNow parse="YYYY-MM-DD HH:mm">{`${event.date} ${
                      event.time
                    }`}</Moment>
                  }
                />
              </ListItemSecondaryAction>
            </ListItem>
          </Fragment>
        ))}
      </List>
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleList);
