import { inputTask, addTask } from '../actions/task';
import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';

const mapStateToProps = ({ task, tasks }) => {
  return {
    task,
    tasks
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputTasK(task) {
      dispatch(inputTask(task))
    },
    addTask() {
      dispatch(addTask())
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);