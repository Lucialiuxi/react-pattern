export let reducerColor = (state,action) => {
  switch (action.type) {
    case 'change-color':
    // 每次state都是新的对象
      return {
        ...state,
        color: action.color
      }
  
    default:
      return state;
  }
}

// state = {color: 'blue'}

// dispatch({type: 'change-color',color: 'red'})
// dispatch({type: 'change-title',color: 'red'})