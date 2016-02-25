import React, { PropTypes, Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';

@cssModules(styles)
class LaneItem extends Component {
  static propTypes = {
    lane: PropTypes.object.isRequired,
    deleteLane: PropTypes.func.isRequired,
  };

  delete = () => this.props.deleteLane(this.props.lane.id);

  render() {
    return (
      <div>
        <header>
          <div>{this.props.lane.title}</div>
          <button onClick={this.delete}>x</button>
        </header>
      </div>
    );
  }
}

import { provide } from 'react-redux-provide-pattern';
import lanesProvider from 'pods/lanes/provider';

export default provide(lanesProvider)(LaneItem);
