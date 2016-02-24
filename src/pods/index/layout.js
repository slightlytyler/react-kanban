import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import DuckImage from 'assets/Duck.jpg';
import styles from './styles.styl';

@cssModules(styles)
export default class IndexLayout extends React.Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    actions: PropTypes.shape({
      doubleAsync: PropTypes.func.isRequired,
      increment: PropTypes.func.isRequired,
    }),
  };

  incrementByOne = () => this.props.actions.increment(1);

  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col-xs-2 col-xs-offset-5">
            <img styleName="duck"
              src={DuckImage}
              alt="This is a duck, because Redux."
            />
          </div>
        </div>
        <h1>Welcome to the React Redux Starter Kit</h1>
        <h2>
          Sample Counter:
          {' '}
          <span styleName="counter--green">{this.props.counter}</span>
        </h2>
        <button className="btn btn-default" onClick={this.incrementByOne}>
          Increment
        </button>
        {' '}
        <button className="btn btn-default" onClick={this.props.actions.doubleAsync}>
          Double (Async)
        </button>
      </div>
    );
  }
}
