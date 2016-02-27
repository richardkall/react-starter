import * as TodoActions from '../../actions/TodoActions';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import style from './App.css';

class App extends Component {
  render () {
    return (
      <div className={style.root}>
        <h1>React Starter</h1>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
