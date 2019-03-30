import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Lists from "./components/Lists";
import CreateParcel from "./components/Dialogs/createParcel";
import BottomDrawer from "./components/BottomDrawer";
import ViewPackage from "./components/ViewPackage";
import { readClipboard } from "./Clipboard";
class App extends Component {
  state = {
    createDialogOpen: false,
    bottomDrawerOpen: true,
    viewPackage: {
      open: false,
      data: {}
    }
  };
  componentDidMount() {
    const g = readClipboard();
  }
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
    return (
      <Fragment>
        <Header />
        <Lists createToggler={this.createDialogToggler} />
        <CreateParcel
          toggler={this.createDialogToggler}
          open={createDialogOpen}
        />
        <BottomDrawer
          toggler={this.bottomDrawerToggler}
          open={bottomDrawerOpen}
        />
        <ViewPackage open={viewPackage.open} />
      </Fragment>
    );
  }
}

export default App;
