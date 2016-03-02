import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../../src/Components/App';


describe('Checks the validity of the Hello componnet', () => {
  let app = null;

  beforeEach(function () {
    app = TestUtils.renderIntoDocument(<App />);
  });

  it('checks App is a valid react element', () => {
    expect(TestUtils.isElement(<App />)).toBeTruthy();
  });

  it('checks if the helo world is displayed on the page', () => {
    let h1 = TestUtils.scryRenderedDOMComponentsWithTag(app, 'h1')[0];

    expect(ReactDOM.findDOMNode(h1).textContent).toEqual('Hello World!!');
  });

  it('checks if the helo world is displayed on the page', () => {
    let p = TestUtils.scryRenderedDOMComponentsWithTag(app, 'p')[0];
    expect(ReactDOM.findDOMNode(p).textContent).toEqual('Lorem ipsum dolor sit amet');
  });

  it('simulates the click event of the app component', () => {
    TestUtils.Simulate.click(app, () => {
      let h1 = TestUtils.scryRenderedDOMComponentsWithTag(app, 'h1')[0];
      expect(ReactDOM.findDOMNode(h1).textContent).toEqual('Goodbye World!!');
    });
  });
});
