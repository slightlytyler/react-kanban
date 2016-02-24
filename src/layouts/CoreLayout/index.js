import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.styl';

function CoreLayout({ children }) {
  return (
    <div styleName="page-container">
      {children}
    </div>
  );
}

CoreLayout.propTypes = {
  children: PropTypes.element,
};

export default cssModules(CoreLayout, styles);
