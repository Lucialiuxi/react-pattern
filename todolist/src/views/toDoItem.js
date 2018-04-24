import React, { Component } from 'react';
import classnames from 'classnames';
class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            toEdit:false,//准备编辑
            editInsert:this.props.value
         }
    }
    // 单选按钮
    changeChecked=()=>{
        console.log('点击选中按钮')
        let {changeItemChecked,id,checked} = this.props;
        if(changeItemChecked){
            changeItemChecked(id,!checked);
        }
    }
    // 双击编辑
    dblClickToEdit=()=>{
        console.log('双击了')
        this.setState({
            toEdit:true
        },function(){
             // setState第二个参数是函数，页面更新之后触发的函数
            this.refs.editInput.focus();
        })
    }
    //改变编辑框的值
    editInput=(ev)=>{
        this.setState({
            editInsert:ev.target.value
        })
    }
    //完成编辑
    editInputKeyDown=(ev)=>{
        let {editItemDone,id} = this.props;
        let code = ev.keyCode;
        let val = ev.target.value.trim();
        if(editItemDone){
            if(code===13){
                // console.log(code)
                editItemDone(id,val);
                this.setState({
                    toEdit:false
                },function(){
                     // setState第二个参数是函数，页面更新之后触发的函数
                    this.refs.editInput.blur()
                })
            }
        }
    }
    //删除
    deleteHandle=(ev)=>{
        console.log('toDoItem中删除')
        let {deleteItem,id} = this.props; 
        if(deleteItem){
            deleteItem(id)
        }
    }
    render() { 
        let {value,checked} = this.props;
        let {toEdit,editInsert} = this.state;
        let setClassName = classnames({
            completed:checked,
            editing:toEdit
        })
        return ( 
            <li className={setClassName}>
                <div className="view">
                {/* 单选按钮 */}
                    <input 
                        className="toggle" 
                        type="checkbox"
                        checked={checked}
                        // onClick={this.changeChecked}
                        onChange={this.changeChecked}
                    />
                    {/* 显示框 */}
                    <label
                        onDoubleClick={this.dblClickToEdit}
                    >{value}</label>
                    {/* 删除 */}
                    <button 
                        className="destroy"
                        onClick={this.deleteHandle}
                    ></button>
                </div>
                {/* 编辑框 */}
                <input 
                    className="edit" 
                    ref="editInput"
                    defaultValue={editInsert}
                    onChange={this.changeEditInput}
                    onKeyDown={this.editInputKeyDown}
                />
            </li>
             )
    }
}
 
export default ToDoItem;