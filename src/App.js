import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { readClipboard, fetchPackage } from "./actions";
import Header from "./components/Header";
import Lists from "./components/Lists";
import CreateParcel from "./components/Dialogs/createParcel";
import BottomDrawer from "./components/BottomDrawer";
import ViewPackage from "./components/ViewPackage";

class App extends Component {
  state = {
    createDialogOpen: false,
    bottomDrawerOpen: false,
    viewPackage: {
      open: false,
      data: {}
    }
  };

  componentDidMount() {}
  openPackageDetails = data => {
    this.setState({ viewPackage: { open: true, data } });
  };
  closePackageDetails = () => {
    this.setState({ viewPackage: { open: false, data: {} } });
  };
  createDialogToggler = () => {
    this.setState(prevState => {
      return { createDialogOpen: !prevState.createDialogOpen };
    });
  };
  bottomDrawerToggler = () => {
    this.setState(prevState => {
      return { bottomDrawerOpen: !prevState.bottomDrawerOpen };
    });
  };

  render() {
    let { createDialogOpen, bottomDrawerOpen, viewPackage } = this.state;
    const { user } = this.props;
    return (
      <Fragment>
        <Header />
        <Lists
          createToggler={this.createDialogToggler}
          packages={user.packages}
          openPackageDetails={this.openPackageDetails}
        />
        <CreateParcel
          toggler={this.createDialogToggler}
          open={createDialogOpen}
        />
        <BottomDrawer
          toggler={this.bottomDrawerToggler}
          open={bottomDrawerOpen}
        />
        <ViewPackage open={viewPackage.open} data={viewPackage.data} />
      </Fragment>
    );
  }
}
function mapStateToProps({ user, bottomDrawer, selectedPackage }) {
  return { user, bottomDrawer, selectedPackage };
}
export default connect(
  mapStateToProps,
  { readClipboard }
)(App);
