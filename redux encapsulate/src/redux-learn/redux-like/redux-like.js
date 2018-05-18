export function createStore(reducer, data) {
  let state = null;
  if (data) state = data;
  let getState = () => state;
  let listeners = [];  // 数组，用来存函数的
  // 订阅函数
  let subscribe = (listener) => listeners.push(listener)
  let dispatch = (action) => {
    // 重新改写state
    state = reducer(state, action);
    // 指向所有的函数
    listeners.forEach((item) => item());
  }
  // 初次触发数据改变，因为数据不存在
  dispatch({})

  return { getState, dispatch, subscribe }
}