import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import LaneList from 'pods/lane/components/List';

@cssModules(styles)
export default class IndexLayout extends React.Component {
  static propTypes = {
  };

  render() {
    return (
      <div>
        <LaneList />
      </div>
    );
  }
}
