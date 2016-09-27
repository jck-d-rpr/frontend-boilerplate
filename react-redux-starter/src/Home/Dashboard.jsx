/* @flow */

import React from 'react';
import Link from 'react-router/lib/Link';

import { ROUTE_PATHS } from '../constants';

const dummy = () => (
  <div className='container'>
    <div className='span12'>
      <h1>Dashboard</h1>
      <Link to={ROUTE_PATHS.ABOUT}>About</Link>
    </div>
  </div>
);

export default dummy;
