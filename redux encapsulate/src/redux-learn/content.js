import React, { Component } from 'react';
import Buttons from './buttons'

import {connect} from './connect';

import PropTypes from 'prop-types'

/* class Content extends Component {
  constructor(props) {
    super(props);

    // 更新组件，必须设置状态
    this.state = {
      color: ''
    }
  }

  componentWillMount() {

    let { store } = this.context;

    // 订阅的目的就是在数据更新后，通知别人更新自己的界面
    store.subscribe(() => {
      console.log('数据更新了，我执行了')
      this._renderByStore()
    })

    this._renderByStore();

  }

  _renderByStore = () => {
    // 初次的时候，把color为初始状态的color
    // 以后再拿最新值的时候，都是在dispatch之后
    let { store } = this.context;
    let d = store.getState();
    this.setState({
      color: d.color
    })
  }

  static contextTypes = {
    color: PropTypes.string,
    store: PropTypes.object,
  }
  render() { 
    return ( 
      <div>
        <h1 style={{ color: this.state.color }}>这是content组件标题</h1>
        <hr/>
        <Buttons />
      </div>
     )
  }
} */

class Content extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>这是content组件标题</h1>
        <hr />
        <Buttons />
      </div>
    )
  }
}

let mapState = (state) => {
  return  {
    color: state.color
  }
}

Content = connect(mapState)(Content);

console.log(Content)
 
export default Content;