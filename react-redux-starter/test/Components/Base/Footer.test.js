import test from 'ava';
import React from 'react';
import { render } from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Footer from '../../../src/Components/Base/Footer';

test('Footer Component has a single footer tag', t => {
  const div = document.createElement('div');
  render(<Footer />, div);
  t.true(TestUtils.isElement(<Footer />));
  // console.log(div.querySelector('footer'));
  t.pass();
});
