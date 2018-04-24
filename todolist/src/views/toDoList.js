import React, { Component } from 'react'
import ToDoItem from './toDoItem';
import ToDoFoot from './toDoFoot';

let  list = [
    {
        id:Date.now()+Math.random(),
        value:123,
        checked:false
    },
    {
        id:Date.now()+Math.random(),
        value:456,
        checked:false
    }
]
class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:list,
            insertValue:'',//记录顶头输入框的值
            hashOption:'all'//记录hash关键字，用来过滤数据
         }
    }

    // 单选改checked
    changeItemChecked=(id)=>{
        console.log('单选改checked')
        let {data} = this.state;

        let item = data.find(item=>item.id===id)

        if(item){
            item.checked = !item.checked
        }

        this.setState({
            data:data
        })
    }

    // 双击编辑
    editItemDone=(id,val)=>{
        // console.log('editItem',id,val)
        let {data} = this.state;

        let item = data.find(item=>item.id===id)

        if(item){
            item.value = val
        }

        this.setState({
            data:data
        })
    }

    //删除一项
    deleteItem=(id)=>{
        let {data} = this.state;

        let arr = data.filter(item=>item.id!==id)

        this.setState({
            data:arr
        })
    }

    //输入框
    insertValueHandle=(ev)=>{
        this.setState({
            insertValue:ev.target.value
        })
    }

    //输入添加数据
    addKeyDown=(ev)=>{
        let {data} = this.state;
        let val = ev.target.value.trim();
        if(ev.keyCode===13 && val){
            data.push({
                id:Date.now()+Math.random(),
                value:val,
                checked:false
            })
            this.setState({
                data:data
            })
            this.setState({
                insertValue:''
            })
        }
    }

    //点击全选
    isCheckedAll=(ev)=>{
        let {data} = this.state;
        console.log('全选')
        data.forEach(item=>item.checked = ev.target.checked)
        this.setState({
            data: data
        })
    }

    //更改记录hash关键字的状态  
    changeHash=(hash)=>{
        // console.log(hash)
        this.setState({
            hashOption:hash
        })
        // console.log(hash)
    }
    
    //拿到地址栏的hash值
    getHash=()=>{
        let hash = window.location.hash;
        if(hash){
            hash = hash.slice(2)
        }else{
            hash = 'all'
        }
         this.setState({
            hashOption:hash
        })
        // console.log(hash)
    }

    //即将挂载  在这里  请求or拿数据
    componentWillMount(){
        // console.log('即将挂载')
        let data = JSON.parse(localStorage.getItem('toDoListData')) || []
        this.setState({
            data: data
        })
    }

    //完成挂载
    componentDidMount(){
        // console.log('完成挂载')
        this.getHash()
    }




    render() { 
        let {data,insertValue,hashOption} = this.state;
        // 渲染的时候 是否全选选中
        let checkedAll = data.every(item=>item.checked);

        //在本地缓存
        localStorage.setItem('toDoListData',JSON.stringify(data))

        let filterData = data.filter(item=>{
            switch(hashOption){
                case 'active':
                    return item.checked===false;
                case 'completed':
                    return item.checked===true;
                default:
                    return true;
            }
        })
        console.log(filterData)
        return ( 
        <section className="todoapp">
            <div>
                <header className="header" >
                    <h1>todos</h1>
                    <input 
                        className="new-todo" 
                        placeholder="请输入内容" 
                        value={insertValue}
                        onChange={this.insertValueHandle}
                        onKeyDown={this.addKeyDown}
                        />
                </header>
                <section className="main">
                    {/* 全选 */}
                    <input 
                        className="toggle-all" 
                        type="checkbox" 
                        defaultChecked={checkedAll}
                        onClick={this.isCheckedAll}
                    />
                    <ul className="todo-list">
                    {
                        filterData.map((item)=>{
                            return <ToDoItem 
                                        key={item.id} 
                                        {...item}
                                        changeItemChecked = {this.changeItemChecked}
                                        editItemDone = {this.editItemDone}
                                        deleteItem = {this.deleteItem}
                                    />
                                
                        })
                    }
                    </ul>
                </section>
                <ToDoFoot data={data} changeHash={this.changeHash}/>
            </div>
        </section>
         )
    }
}
 
export default ToDoList;