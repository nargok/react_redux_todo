import { inputTask, addTask, clearTask, clickItem } from '../actions/task';
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
    input(task) {
      dispatch(inputTask(task))
    },
    add() {
      dispatch(addTask())
    },
    clear() {
      dispatch(clearTask())
    },
    click(index) {
      dispatch(clickItem(index))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);