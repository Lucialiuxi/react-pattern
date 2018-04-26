import React, { Component } from 'react';
import PropTypes from 'prop-types'

export let connect = (mapStateToProps, mapDispatchToProps) => {
  return (WrapperConponent) => {


    class Connect extends Component {
      constructor(props) {
        super(props);
        this.state = {
          stateProps: {}  // 未来传给包装的组件
        };
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
        let { store } = this.context;
        let d = store.getState();  // {color,title}
        let stateToProp = mapStateToProps ? mapStateToProps(d) : {}; // {color}

        /*
        mapDispatchToProps执行之后返回的一个对象，对象里面放的就是一个函数
        执行对象里面的函数，函数里面就会执行store.dispatch，对象里面有给dispatch传参

        */
        let dispatchToProp = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {}; 
        this.setState({
          stateProps: {
            // 把对象到stateProps上
            ...stateToProp,//color:XXX
            ...dispatchToProp//XXX:function(){}
          }
        })
      }

      //共享组先级context数据的类型规定
      static contextTypes = {
        color: PropTypes.string,
        store: PropTypes.object,
      }


      render() {
        // 把stateProps里的数据传给套用的组件
        return <WrapperConponent {...this.state.stateProps} />
      }
    }

    return Connect;
  }
}

//在APP.js中使用
export class Provider extends Component{
  // 规定所有子孙组件共享数据的类型
  static childContextTypes = {
    store: PropTypes.object
  }

  // 共享的具体数据
  getChildContext() {
    let store = this.props.store;
    return {
      store: store
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}