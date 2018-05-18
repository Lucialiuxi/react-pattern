let nextTodoId = 0;
//添加一条数据
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

//设置课件的li
export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

//toggle li 文字的 completed
export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}