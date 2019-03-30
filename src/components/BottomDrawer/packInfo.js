import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import LocalShipping from "@material-ui/icons/LocalShipping";
const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <LocalShipping />
        <Typography variant="h5" component="h2">
          Parcel Detected
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          DHL
        </Typography>
        <Typography component="p">
          12877389DHIWDB
          <br />
          Cottbus > Cottbus
        </Typography>
      </CardContent>
      <CardActions>
        <div style={{ marginLeft: "auto" }}>
          <Button size="small">Add</Button>
          <Button size="small">Cancel</Button>
        </div>
      </CardActions>
    </Card>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
