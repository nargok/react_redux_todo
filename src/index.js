import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import tasksReducer from "./reducers/task";
import Task from "./containers/task";
import {createLogger} from "redux-logger";

const logger = createLogger();


const store = createStore(
  tasksReducer,
  undefined,
  applyMiddleware(logger)
);

render(
  <Provider store={store}>
    <Task />
  </Provider>,
  document.getElementById('root')
);
