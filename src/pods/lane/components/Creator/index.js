import React, { PropTypes, Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';

@cssModules(styles)
export default class LaneCreator extends Component {
  static propTypes = {
    createLane: PropTypes.func.isRequired,
  };

  state = {
    title: '',
  };

  submit = () => {
    const { title } = this.state;

    if (!title) {
      return;
    }

    this.props.createLane(title);
    this.clear();
  }

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

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'pods/lanes/provider';

const { createLane } = actions;

export default connect(
  undefined,
  dispatch => bindActionCreators({ createLane }, dispatch)
)(LaneCreator);
