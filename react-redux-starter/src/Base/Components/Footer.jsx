import React from 'react';
import Link from 'react-router/lib/Link';

import GoCode from 'react-icons/lib/go/code';
import GoHeart from 'react-icons/lib/go/heart';

import { ROUTE_PATHS } from '../../constants';

const FOOTER_BASE_STYLES = {
  background: '#404040',
  color: '#999',
  fontSize: '.85em',
  textAlign: 'center',
  padding: '3rem'
};

/**
 * An about message eith a link to the about page
 * @return {StatelessFunctionalReactComponent} The markup information about about.
 */
const About = () => (
  <div style={{ flex: 2, margin: 10 }}>
    <h3>About</h3>
    <p>
      An app that does something
      &nbsp;
      <Link to={ROUTE_PATHS.ABOUT}>Learn More</Link>
    </p>
  </div>
);

/**
 * For now showing a hardcoded quote (but this will become a placeholder for a random quote)
 * @return {StatelessFunctionalReactComponent} The markup information about the awesome quote
 */
const QuoteBlock = () => (
  <div style={{ flex: 4, textAlign: 'center' }}>
    <blockquote className='blockquote-reverse' style={{ margin: 10, marginTop: 30 }}>
      <p>Some quote that suites this app</p>
      <footer>Some guy</footer>
    </blockquote>
  </div>
);

/**
 * Branding and other crappy stuff
 * @return {StatelessFunctionalReactComponent} The markup information about the bottm line for footer
 */
const BottomLine = () => (
  <div style={{
    background: '#303030',
    color: '#999',
    fontSize: '.85em',
    padding: '1rem',
    text: 'muted'
  }}>
    <div className='container' style={{
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{ flex: 1, textAlign: 'center' }} >App Name</div>
      <div style={{ flex: 6, textAlign: 'right' }}>
        <GoCode /> with <GoHeart /> by <a href='https://github.com/jckdrpr' >Sherub Thakur</a>
      </div>
    </div>
  </div>
);

/**
 * The super awesome footer Component It is divided into Topline showing about, Contribute and quote
 * Component followed by a Component displaying Branding and other crappy stuff
 *
 * @return {StatelessFunctionalReactComponent} The markup information about the footer
 */
const Footer = () => (
  <footer>
    <div style={FOOTER_BASE_STYLES} >
      <div className='container' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >
        <About />
        <QuoteBlock />
      </div>
    </div>
    <BottomLine />
  </footer>
);

export default Footer;
