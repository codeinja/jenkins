import React, { Component, Fragment } from 'react';
import './App.css';

import InputTodo from './components/InputTodo'
import ListTodo from './components/ListTodo'
class App extends Component {
  render() {
    return (
      <Fragment>
        <div class="container">
          <InputTodo/>
          <ListTodo/>
        </div>
      </Fragment>
    );
  }
}

export default App;
