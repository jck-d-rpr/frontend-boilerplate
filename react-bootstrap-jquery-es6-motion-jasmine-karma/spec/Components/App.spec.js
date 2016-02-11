import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../../src/Components/App';

describe('Checks the validity of the App componnet', () => {
  it('checks App is a valid react element', () => {
    expect(TestUtils.isElement(<App />)).toBeTruthy();
  });

  it('checks if the helo world is displayed on the page', () => {
    let app = TestUtils.renderIntoDocument(<App />);
    let div = TestUtils.findRenderedDOMComponentWithTag(app, 'div');
    expect(ReactDOM.findDOMNode(div).textContent).toEqual('Hello World!!');
  });
});
