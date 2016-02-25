import React from 'react';
import { connect } from 'react-redux';
import {
  keys,
  map,
  zipObject,
  omit,
  intersection,
} from 'lodash';

// Create the baes provider object
export function createProvider(type, recordName = type.slice(0, -1), keyName = `${recordName}Key`) {
  return {
    type,
    recordName,
    keyName,
  };
}

// Returns the string mapped to recordsById
function byIds(type) {
  return `${type}ById`;
}

// Returns a function that accepts a Component instance as the argument
export function provide(provider, merge) {
  const { type, recordName, keyName } = provider;
  const allowedStateProps = [
    type,
    byIds(type),
    recordName,
    ...keys(omit(provider.reducers, ['records', 'recordsById'])),
  ];
  const allowedDispatchProps = keys(provider.actions);

  // Return a connected component instance
  return function wrap(Component) {
    const requestedProps = keys(Component.propTypes);
    const requestedStateProps = intersection(requestedProps, allowedStateProps);
    const requestedDispatchProps = intersection(requestedProps, allowedDispatchProps);

    const mapStateToProps = state => {
      const providerState = state[type];

      const mappedStateProps = zipObject(requestedStateProps, map(requestedStateProps, prop => {
        switch (true) {
          case prop === type:
            return providerState.records;

          case prop === byIds(type):
            return providerState.recordsById;

          default:
            return providerState[prop];
        }
      }));

      if (requestedStateProps.indexOf(recordName) !== -1) {
        mappedStateProps[byIds(type)] = providerState.recordsById;
      }

      return mappedStateProps;
    };
    const mapDispatchToProps = dispatch => ({});

    class WrappedComponent extends Component {
      static propTypes = {};

      render() {
        if (requestedStateProps.indexOf(recordName) !== -1) {
          const props = {
            ...this.props,
            [recordName]: this.props[byIds(type)][this.props[keyName]],
          };

          if (requestedStateProps.indexOf(byIds(type)) === -1) {
            return <Component {...omit(props, byIds(type))} />;
          }

          return <Component {...props} />;
        }

        return <Component {...this.props} />;
      }
    }

    return connect(
      mapStateToProps,
      mapDispatchToProps,
      merge
    )(WrappedComponent);
  };
}
