import React, { PropTypes } from 'react';
// react rotuer Link Component (used to link to the homepage)
import Link from 'react-router/lib/Link';
// the Topbar and the icon button it contains
import AppBar from 'material-ui/AppBar';

import { ROUTE_PATHS } from '../../constants';

/**
 * The Topbar.
 *
 * @param  {object} props Only to pass to the child (IconButton controlling sidebar's states)
 * @return {StatelessFunctionalReactComponent} The Topbar
 */
const Topbar = (props) => (
  <header >
    <AppBar
      iconClassNameRight='muidocs-icon-navigation-expand-more'
      onLeftIconButtonTouchTap={props.toggleDrawer}
      title={<Link to={ROUTE_PATHS.DEFAULT} style={{ color: 'white' }}>Name of the app</Link>}
      style={{ zIndex: 2000, position: 'fixed' }}
    />
  </header>
);

Topbar.propTypes = {
  toggleDrawer: PropTypes.func.isRequired
};

export default Topbar;