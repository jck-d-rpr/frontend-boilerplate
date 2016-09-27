/* @flow */

import React from 'react';
import Link from 'react-router/lib/Link';

import { ROUTE_PATHS } from '../constants';

const dummy = () => (
  <div>
    <h1>Dashboard</h1>
    <Link to={ROUTE_PATHS.ABOUT}>About</Link>
  </div>
);

export default dummy;
