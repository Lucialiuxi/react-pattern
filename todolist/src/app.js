
import React, { Component } from 'react';
import ToDoList from './views/toDoList';


import './assets/css/base.css'
import './assets/css/index.css'

class App extends Component {
    render(){
        return (
            <div>
                <ToDoList/>
            </div>
        )
    }
}
 
export default App;