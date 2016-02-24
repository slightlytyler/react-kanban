import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import LaneItem from 'pods/lane/components/Item';
import LaneCreator from 'pods/lane/components/Creator';

@cssModules(styles)
class LaneList extends React.Component {
  static propTypes = {
    lanes: PropTypes.array,
  };

  static defaultProps = {
    lanes: [],
  };

  render() {
    const { lanes } = this.props;

    return (
      <div>
        <header>
        </header>
        {
          lanes.map(lane => (
            <LaneItem
              key={lane}
              id={lane}
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
    lanes: state.orm.Lane.items,
  };
}

export default connect(mapStateToProps)(LaneList);
