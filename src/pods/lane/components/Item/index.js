import React, { PropTypes, Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';

@cssModules(styles)
export default class LaneItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title } = this.props;

    return (
      <div>
        <header>
          <div>{title}</div>
        </header>
      </div>
    );
  }
}

import { connect } from 'react-redux';
import { selectors } from 'pods/lanes/provider';

export default connect(
  (state, props) => selectors.findLaneById(state, props)
)(LaneItem);
