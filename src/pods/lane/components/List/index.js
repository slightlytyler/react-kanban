import React, { PropTypes, Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import LaneItem from 'pods/lane/components/Item';
import LaneCreator from 'pods/lane/components/Creator';

@cssModules(styles)
class LaneList extends Component {
  static propTypes = {
    lanes: PropTypes.array.isRequired,
  };

  render() {
    const { lanes } = this.props;

    return (
      <div>
        <header>
        </header>
        {
          lanes.map(id => (
            <LaneItem
              key={id}
              laneKey={id}
            />
          ))
        }
        <LaneCreator />
      </div>
    );
  }
}


import { provide } from 'containers/provide';
import lanesProvider from 'pods/lanes/provider';

export default provide(lanesProvider)(LaneList);
