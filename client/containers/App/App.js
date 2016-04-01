import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import style from './App.css';

export const App = (props) => (
  <div className={style.root}>
    <h1>Hello World</h1>
    {props.loading ? 'Loading...' : false}
  </div>
);

App.propTypes = {
  loading: PropTypes.bool
};

const mapStateToProps = (state) => ({
  loading: state.app.loading
});

export default connect(mapStateToProps)(App);
