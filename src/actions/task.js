const inputTask = task => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

const addTask = () => ({
  type: 'ADD_TASK'
});

const updateTodo = (index) => ({
  type: 'UPDATE_TODO',
  payload: {
    index
  }
});

export {
  inputTask,
  addTask,
  updateTodo,
};


