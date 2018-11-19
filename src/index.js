import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import tasksReducer from './reducers/task';
import TodoApp from './containers/TodoApp';

const store = createStore(tasksReducer);

render (
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
