import React, { Fragment } from 'react';

const Task = ({ tasks, inputTask, addTask }) => {
  return (
    <Fragment>
      <input type="text" onChange={e => inputTask(e.target.value)} />
      <button onClick={() => addTask()}>登録</button>
      <ul>
        {
          tasks.map(task => {
            return <li>{task.title}</li>
          })
        }
      </ul>
    </Fragment>
  )
};

export default Task;


