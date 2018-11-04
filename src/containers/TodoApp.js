import { inputTask, addTask, resetTask, clickItem } from '../actions/task';
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
    inputTask(task) {
      dispatch(inputTask(task))
    },
    addTask() {
      dispatch(addTask())
    },
    resetTask() {
      dispatch(resetTask())
    },
    clickItem(index){
      dispatch(clickItem(index))
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);