import React, { Component } from 'react'
import Navbar from "./Navbar/Navbar";

import GlobalStyle from './Global';

class Header extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render() {

    return (
      <>
        <Navbar 
          navbarState={this.state.navbarOpen} 
          handleNavbar={this.handleNavbar}
        />
        <GlobalStyle />
  
      </>
    )
  }
}

export default App

