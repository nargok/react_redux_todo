import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import tasksReducer from "./reducers/task";
import Task from "./containers/task";


const store = createStore(tasksReducer);

render(
  <Provider store={store}>
    <Task />
  </Provider>,
  document.getElementById('root')
);
