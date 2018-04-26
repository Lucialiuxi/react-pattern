import React, { Component } from 'react';
import PropTypes from 'prop-types'
// 这个组件依赖stroe，不能复用
// 复用这个组件，只依赖props
/* class Header extends Component {
  constructor(props) {
    super(props);
    
    // 更新组件，必须设置状态
    this.state = { 
      color: ''
    }
  }

  componentWillMount(){
    
    let { store} = this.context;

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
        <h1 style={{ color: this.state.color}}>这是header组件的标题</h1>
        <hr />
      </div>
    )
  }
} */

class Header extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>这是header组件的标题</h1>
        <hr />
      </div>
    )
  }
}

// 高阶函数
// 传入一个组件，返回一个组件，把传入组件包装一下
// 映射一个状态的对象到木偶组件的props中
let connect = (mapStateToProps) => {//第一次执行的到return的函数，就可以把要套用的组件作为参数传入return出来的函数
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
        //在调用dispatch的时候才会触发传入的这个函数_renderByStore
        store.subscribe(() => {
          console.log('数据更新了，我执行了')
          this._renderByStore()
        })

        this._renderByStore();

      }

      _renderByStore = () => {
        let { store } = this.context;
        //拿到数据
        let d = store.getState();  // {color,title}
        //传入数据返回一个新对象，是从传入的数据中拿的值
        let stateToProp = mapStateToProps(d); // {color}
        //stateProps属性的值对应一个对象
        this.setState({
          stateProps: stateToProp
        })
      }

      static contextTypes = {
        color: PropTypes.string,
        store: PropTypes.object,
      }


      render() {
        //把对象stateProps扩展传到包装的组件中
        return <WrapperConponent {...this.state.stateProps} />
      }
    }

    return Connect;
  }
}


// 就是从store中取出，这个组件所需要的数据。
let mapState = (state) => {  // {color,title}
  return {
    color: state.color
  }
}

Header = connect(mapState)(Header);
 
export default Header;