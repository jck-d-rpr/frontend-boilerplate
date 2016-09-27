/* @flow */

import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// import MdLocalBar from 'react-icons/lib/md/local-bar';
// import MdAdd from 'react-icons/lib/md/add';
import MdPersonOutline from 'react-icons/lib/md/person-outline';

import { ROUTE_PATHS } from '../../constants';

type SidebarItemPropTypes = {
  link: string,
  name: string,
  icon: React.Element<*>
}

/**
 * The render info of a single item in the sidebar.
 *
 * @param  {object} props The passed down props (link, name, and an icon to display)
 * @return {React.Element<*>} Render info of a single sidebar-item
 */
const SidebarItem = (props: SidebarItemPropTypes) => (
  <Link to={props.link}>
    <MenuItem primaryText={props.name}
      leftIcon={props.icon}
    />
  </Link>
);

/**
 * PropTypes
 * @type {Object}
 */
SidebarItem.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired
};


type SidebarPropTypes = {
  open: boolean
};

/**
 * The render info of the entire sidebar.(pity it's called Drawer. What were you thinking material-ui guyes??)
 *
 * @param  {object} props The props (just a boolean controlling presence/absence of the sidebar)
 * @return {StatelessFunctionalReactComponent} The sidebar ('nuff said)
 */
const Sidebar = (props: SidebarPropTypes) => (
  <Drawer open={props.open}>
    <AppBar />
    <SidebarItem icon={<MdPersonOutline />} link={ROUTE_PATHS.DEFAULT} name={'Dashboard'} />
    <SidebarItem icon={<MdPersonOutline />} link={ROUTE_PATHS.ABOUT} name={'About'} />
  </Drawer>
);

/**
 * PropTypes
 * @type {Object}
 */
Sidebar.propTypes = {
  open: PropTypes.bool.isRequired
};

export default Sidebar;
