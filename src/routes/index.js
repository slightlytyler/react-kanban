/* eslint no-unused-vars: [2, {"argsIgnorePattern": "store"}] */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import CoreLayout from 'layouts/CoreLayout';
import IndexLayout from 'pods/index/layout';

export default (store) => (
  <Route path="/" component={CoreLayout}>
    <IndexRoute component={IndexLayout} />
  </Route>
);
