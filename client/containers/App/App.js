import * as TodoActions from '../../actions/TodoActions';
import React, {Component, PropTypes} from 'react';
import Header from '../../components/Header';
import MainSection from '../../components/MainSection';
import {SHOW_ALL} from '../../constants/TodoFilters';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import style from './App.css';

export class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    filter: PropTypes.string,
    route: PropTypes.object.isRequired,
    todos: PropTypes.array.isRequired
  }

  constructor (props, context) {
    super(props, context);
    this.state = {filter: this.props.route.filter || SHOW_ALL};
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.route.filter !== this.props.filter) {
      this.setState({filter: nextProps.route.filter});
    }
  }

  render () {
    const {actions, todos} = this.props;

    return (
      <div className={style.root}>
        <Header addTodo={actions.addTodo} />
        <MainSection
          actions={actions}
          filter={this.state.filter}
          todos={todos}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
