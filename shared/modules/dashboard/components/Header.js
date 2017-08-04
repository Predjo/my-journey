
import React, { PropTypes, Component } from 'react';

import styles from './Header.scss';

class Header extends Component {

  static propTypes = {
    handleToggleSideBar : PropTypes.func
  }

  render () {

    return (
      <header className = { styles.wrap } >

      </header>
    );
  }
}

export default Header;
