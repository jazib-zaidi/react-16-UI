import React from 'react';
import PropTypes from 'prop-types';

class LegacyComponent extends React.Component {
  static childContextTypes = {
    theme: PropTypes.string,
  };

  getChildContext() {
    return { theme: 'dark' };
  }

  componentDidMount() {
    console.log('Component mounted!');
  }

  render() {
    return <div>Legacy Component (Works in React 16.0+)</div>;
  }
}

export default LegacyComponent;
