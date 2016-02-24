import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import LaneItem from 'pods/lane/components/Item';
import LaneCreator from 'pods/lane/components/Creator';

@cssModules(styles)
class LaneList extends React.Component {
  static propTypes = {
    laneIds: PropTypes.array,
  };

  render() {
    const { laneIds } = this.props;

    return (
      <div>
        <header>
        </header>
        {
          laneIds.map(id => (
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

function mapStateToProps(state) {
  return {
    laneIds: state.orm.Lane.items,
  };
}

export default connect(mapStateToProps)(LaneList);
