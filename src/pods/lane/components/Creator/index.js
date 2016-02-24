import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cssModules from 'react-css-modules';

import styles from './styles.styl';
import { actions } from 'pods/lane/model';

@cssModules(styles)
export default class LaneCreator extends React.Component {
  static propTypes = {
    createLane: PropTypes.func.isRequired,
  };

  state = {
    title: '',
  };

  submit = () => this.props.createLane(this.state.title);

  clear = () => {
    this.setState({
      title: '',
    });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.title}
          onChange={(e) => this.setState({
            title: e.target.value,
          })}
        />
        <button onClick={this.submit}>Save</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createLane: actions.createLane,
  }, dispatch);
}

export default connect(() => ({}), mapDispatchToProps)(LaneCreator);
