import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

/*VisiToList传过来的todos数组是渲染li的所有对象
VisiToList传过来的onTodoClick是点击li切换是否有下划线
*/
const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo 
        key={todo.id} 
        {...todo} 
        onClick={() => onTodoClick(todo.id)} 
      />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList