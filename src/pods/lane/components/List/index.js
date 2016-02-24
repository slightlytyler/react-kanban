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
              id={id}
            />
          ))
        }
        <LaneCreator />
      </div>
    );
  }
}


import { connect } from 'react-redux';
import { selectors } from 'pods/lanes/provider';

export default connect(
  state => ({ lanes: selectors.lanesSelector(state) })
)(LaneList);
