const inputTask = task => ({
  type: 'INPUT_TASK',
  payload: {
    task
  }
});

const addTask = () => ({
  type: 'ADD_TASK'
});

const resetTask = () => ({
  type: 'RESET_TASK'
});

export { inputTask, addTask, resetTask };