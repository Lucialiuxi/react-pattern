import React, { Component } from 'react';

class ToDOFoot extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    
    render() { 
        let {data} = this.props;
        let len = 0;
        data.forEach(item => {
            if(item.checked){
                len++
            }
            return len
        });


        return ( 
            <footer className="footer">
                <span className="todo-count">
                    <strong>{len}</strong>
                    <span>条未选中</span>
                </span>
                <ul className="filters">
                    <li>
                        <a 
                            href="#/all" 
                            // className="selected"
                            onClick={()=>{this.props.changeHash('all')}}
                        >All</a></li> 
                    <li>
                        <a 
                            href="#/active" 
                            className=""
                            onClick={()=>{this.props.changeHash('active')}}
                        >Active</a></li> 
                    <li>
                        <a 
                            href="#/completed" 
                            className=""
                            onClick={()=>{this.props.changeHash('completed')}}
                        >Completed</a></li>
                   </ul>
            </footer> 
            )
    }
}
 
export default ToDOFoot;