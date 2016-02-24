import React from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import LaneList from 'pods/lane/components/List';

const IndexLayout = () => (
  <div>
    <LaneList />
  </div>
);

export default cssModules(IndexLayout, styles);
