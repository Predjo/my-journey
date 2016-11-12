
import React, { PropTypes, Component } from 'react';

import { AppBar } from 'react-toolbox/lib/app_bar';
import { IconButton } from 'react-toolbox/lib/button';

import styles from './Header.scss';

class Header extends Component {

  toggleDrawer() {
    console.log('Hello');
  }

  render () {

    return (
      <AppBar className = { styles.wrap } >
        <IconButton icon = 'menu' inverse = { true } onClick = { () => this.toggleDrawer() }/>
      </AppBar>
    );
  }
}

export default Header;
