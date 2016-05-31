import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import MyRawTheme from './theme';
import Topbar from './Topbar';
import Footer from './Footer';

const NAVBAR_HEIGHT = 64;

/**
 * The main Component. Every other Component is a child to this Component.
 */
export default class Main extends React.Component {
  /**
   * The prpops (just saying I need 'em children to render')
   * @type {Object}
   */
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  /**
   * Setting the context (required by the theme)
   * @type {Object}
   */
  static childContextTypes = {
    // the key passed through context must be called "muiTheme"
    muiTheme: React.PropTypes.object
  };

  // I'm pure
  shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

  /**
   * Returns an object containing the theme context for the entire app
   *
   * @return {[type]} [description]
   */
  getChildContext = () => ({ muiTheme: getMuiTheme(MyRawTheme) });

  render() {
    return (
      <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
        <Topbar />
        <div style={{ flex: 1, paddingTop: NAVBAR_HEIGHT }}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
