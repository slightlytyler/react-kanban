import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';

import styles from './styles.styl';

@cssModules(styles)
class LaneItem extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
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

function mapStateToProps(state) {
  return {
    lanesById: state.orm.Lane.itemsById,
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    lane: stateProps.lanesById[ownProps.id],
  };
}

export default connect(
  mapStateToProps,
  () => ({}),
  mergeProps,
)(LaneItem);
