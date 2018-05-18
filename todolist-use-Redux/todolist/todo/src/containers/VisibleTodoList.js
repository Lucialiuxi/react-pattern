import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

//筛选出可见的li  todos就是所有渲染li的对象  filter就是action的type是'SET_VISIBILITY_FILTER'
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

//要修改的数据
const mapStateToProps = state => {
  console.log(state)
  return {//传入所有渲染li的数组todos和当前展示的条件
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

//要提交的动作
const mapDispatchToProps = dispatch => {
  return {//把这个方法传给TodoList组件，再传给Todo组件
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList