const initialState = {
  task: '',
  tasks: [
    { title: 'デフォルトタスク', done: false }
  ]
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([ { title: state.task, done: false }])
      }
    case 'RESET_TASK':
      return {
        ...state,
        tasks: []
      }
    default:
      return state;
  }
};

export default tasksReducer;