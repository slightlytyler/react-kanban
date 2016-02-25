import React, { PropTypes, Component } from 'react';
import cssModules from 'react-css-modules';

import styles from './styles.styl';

@cssModules(styles)
class LaneCreator extends Component {
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

import { provide } from 'react-redux-provide-pattern';
import lanesProvider from 'pods/lanes/provider';

export default provide(lanesProvider)(LaneCreator);
