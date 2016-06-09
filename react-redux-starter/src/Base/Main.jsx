import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import MyRawTheme from './theme';
import Topbar from './Components/Topbar';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import { toggleDrawer } from './Actions/baseActions';

const NAVBAR_HEIGHT = 64;

/**
 * The main Component. Every other Component is a child to this Component.
 */
class Main extends React.Component {
  /**
   * The prpops (just saying I need 'em children to render')
   * @type {Object}
   */
  static propTypes = {
    children: PropTypes.object.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
    openDrawer: PropTypes.bool.isRequired
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
        <Topbar toggleDrawer={() => {
          this.props.toggleDrawer();
        }}/>
        <Sidebar open={this.props.openDrawer} />
        <div style={{ flex: 1, paddingTop: NAVBAR_HEIGHT }}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

/**
 * The portion of the redux store (is the drawer open or not) will this Component (The main page) subscribe to.
 * @param {object} state The whole redux state-tree
 * @return {object} The object that will be merged to the props of the Component
 */
const mapStateToProps = (state) => ({
  openDrawer: state.baseReducer.openDrawer
});

/**
 * Specifying the redux action creator
 * @param  {func} dispatch The dispatch
 * @return {object} Mapping the dispatch to the props.
 */
const mapDispatchToProps = (dispatch) => ({
  toggleDrawer: () => dispatch(toggleDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
