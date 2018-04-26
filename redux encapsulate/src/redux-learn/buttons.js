import React, { Component } from 'react';
import { connect } from './connect';

/* class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  static contextTypes = {
    color: PropTypes.string,
    store: PropTypes.object
  }

  changeColor(color){
    // 改变store中的color，dispatch一个action 
    let {store} = this.context;
    console.log(store)
    store.dispatch({
      type: 'change-color',
      color: color
    })
  }

  render() { 
    return ( 
      <div>
        <h3 style={{ color: this.context.color }}>这是buttons组件的标题</h3>
        <button onClick={this.changeColor.bind(this,"yellow")}>yellow</button>
        <button onClick={this.changeColor.bind(this, "red")}>red</button>
      </div>
    )
  }
} */

class Buttons extends Component {
  render() {
    return (
      <div>
        <h3 style={{ color: this.props.color }}>这是buttons组件的标题</h3>
        <button onClick={() => {
          this.props.changeColor('yellow')
        }}>yellow</button>
        <button onClick={() => {
          this.props.changeColor('red')
        }}>red</button>
      </div>
    )
  }
}
// 某些组件只需要数据
// 某些组件需要dispatch一些action
function MapState(state) {
  return {
    color: state.color
  }
}

function MapDispatch(dispatch) {
  return {
    changeColor: (color) => {
      dispatch({
        type: 'change-color',
        color: color
      })
    }
  }
}

export default connect(MapState, MapDispatch)(Buttons);


/* Buttons = connect(function (state) {
  return {
    color: state.color
  }
})(Buttons); */

//export default Buttons
/* export default connect(function (state) {
  return {
    color: state.color
  }
})(Buttons); */
