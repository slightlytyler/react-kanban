import React, { PropTypes, Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';

@cssModules(styles)
class LaneItem extends Component {
  static propTypes = {
    lane: PropTypes.object.isRequired,
  };

  render() {
    const { title } = this.props.lane;

    return (
      <div>
        <header>
          <div>{title}</div>
        </header>
      </div>
    );
  }
}

import { provide } from 'react-redux-provide-pattern';
import lanesProvider from 'pods/lanes/provider';

export default provide(lanesProvider)(LaneItem);
