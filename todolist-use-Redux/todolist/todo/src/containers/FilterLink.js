import { connect } from 'react-redux'
//设置展示的类别 action
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

/**
 * 
 * @param {*} state state是reducer在操作之后返回的todos的数组
 * @param {*"}显示当前是展示哪一类高亮的标签的子节点是什么} ownProps 
 * ownProps是一个对象{filter: "SHOW_COMPLETED", children: "Completed
 */
const mapStateToProps = (state, ownProps) => {
  // console.log('state',state)
  // console.log('ownProps',ownProps)
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log('state',dispatch)
  console.log('ownProps',ownProps)
  /**是父级传过来的参数  Footer中传过来的
   * ownProps {filter: "SHOW_ALL", children: "All"}
   * ownProps {filter: "SHOW_ACTIVE", children: "Active"}
   * ownProps {filter: "SHOW_COMPLETED", children: "Completed"}
   */
  return {//点击哪个筛选的标签，就把筛选的action给组件{type: 'SET_VISIBILITY_FILTER',父级传过来的filter}
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink