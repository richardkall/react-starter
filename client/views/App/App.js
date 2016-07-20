import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import style from './App.css';

export const App = ({children, loading}) => (
  <div className={style.root}>
    <h1>Hello World</h1>
    {loading && 'Loading...'}
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object,
  loading: PropTypes.bool
};

const mapStateToProps = ({app}) => ({
  loading: app.loading
});

export default connect(mapStateToProps)(App);
