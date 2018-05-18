import React from 'react'
import PropTypes from 'prop-types'

/*
VisiToList传给Todolist传入了todos的id,
再传过来的 onClick 是点击li切换是否有下划线
Todolist夸张对象过来{completed:false,id:0,text:"ddd"}

*/
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;