import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import tasksReducer from "./reducers/task";
import Task from "./containers/task";
import {createLogger} from "redux-logger";
import { normalize, schema } from 'normalizr';


const logger = createLogger();


const store = createStore(
  tasksReducer,
  undefined,
  applyMiddleware(logger)
);


// Test normalizr
const articlesData = {
  "id": "123",
  "author": {
    "id": "1",
    "name": "Paul"
  },
  "title": "My awesome blog post",
  "comments": [
    {
      "id": "324",
      "commenter": {
        "id": "2",
        "name": "Nicole"
      }
    }
  ]
};


const user = new schema.Entity('users');
const comment = new schema.Entity('comments', {
  commenter: user
});
const article = new schema.Entity('articles', {
  author: user,
  comments: [comment]
});

const normalizedDate = normalize(articlesData, article);
console.log(normalizedDate);

render(
  <Provider store={store}>
    <Task />
  </Provider>,
  document.getElementById('root')
);
