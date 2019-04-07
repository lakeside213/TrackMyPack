import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import { addPackage } from "../../actions";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  menu: {
    width: 200
  }
});
class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { trackingNumber: "", packageName: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { trackingNumber, packageName } = this.state;
    this.props.addPackage(trackingNumber, packageName);
    this.setState({ trackingNumber: "", packageName: "" });
  }
  render() {
    const { classes, open, toggler } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={toggler}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Parcel</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="trackingNumber"
              helperText="Please enter the tracking number of the parcel"
              label="Tracking number"
              type="number"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
              placeholder=" "
              value={this.state.value}
              onChange={this.handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="packageName"
              helperText="Please enter the name of the parcel!"
              label="Parcel name(optional)"
              type="text"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
              placeholder="Enter "
              value={this.state.value}
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={toggler} color="primary">
              Cancel
            </Button>
            <Button
              onClick={e => {
                this.handleSubmit(e);
                toggler();
              }}
              color="primary"
            >
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default connect(
  null,
  { addPackage }
)(withStyles(styles)(FormDialog));
