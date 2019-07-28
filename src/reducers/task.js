const initState = {
  task: '',
  tasks: []
};

const tasksReducer = (state = initState, action) => {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([{title: state.task, done: false}])
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        tasks: state.tasks.map(task =>
         task.id === action.payload.index
          ? { ...task, done: !task.done }
          : task
        )};
    default:
      return state;

  }
};

export default tasksReducer;
