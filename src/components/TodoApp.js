import React from 'react';

const TodoApp = ({ tasks, inputTask, addTask, resetTask }) => {
  const items = tasks.map((task, index) => {
    return <li key={index}>{task.title}</li>
  })
  return (
    <React.Fragment>
      <div>
        <input type="text" onChange={(e) => inputTask(e.target.value)} />
        <button onClick={() => addTask()}>Add</button>
        <button onClick={() => resetTask()}>Reset</button>
      </div>
      <ul>{items}</ul>
    </React.Fragment>
  )
}

export default TodoApp;