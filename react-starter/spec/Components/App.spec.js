import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../../src/Components/App';


describe('The Hello Component', () => {
  let app = null;

  beforeEach(function () {
    app = TestUtils.renderIntoDocument(<App />);
  });

  it('should be a react element', () => {
    expect(TestUtils.isElement(<App />)).toBeTruthy();
  });

  it('should display Hello World!! on the screen', () => {
    let h1 = TestUtils.scryRenderedDOMComponentsWithTag(app, 'h1')[0];

    expect(ReactDOM.findDOMNode(h1).textContent).toEqual('Hello World!!');
  });

  it('should display Lorem ipsum dolor sit amet on the screen in a p tag', () => {
    let p = TestUtils.scryRenderedDOMComponentsWithTag(app, 'p')[0];
    expect(ReactDOM.findDOMNode(p).textContent).toEqual('Lorem ipsum dolor sit amet');
  });

  it('should change h1 from Hello World!! to Goodbye World!! on a click event', () => {
    let h1 = TestUtils.scryRenderedDOMComponentsWithTag(app, 'h1')[0];
    TestUtils.Simulate.click(h1, () => {
      expect(ReactDOM.findDOMNode(h1).textContent).toEqual('Goodbye World!!');
    });
  });
});
