import React, {Component} from 'react';
import './App.css';
import {inject, observer} from "mobx-react";

@inject("app")
@observer
class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let todos = this.props.app.todos
        let todosDiv = todos.map((item, index) => {
            return (<Todo index={index}/>)
        })
        return (
            <div className="App">
                {todosDiv}
            </div>
        );
    }
}


@inject("app")
@observer
class Todo extends Component {
    constructor(props) {
        super(props)
    }

    handleClick() {
        let index = this.props.index
        this.props.app.handleClick(index)
    };

    render() {
        let index = this.props.index
        let todo = this.props.app.todos[index]
        return (
            <p><input type={'checkbox'} checked={todo.checked} onClick={this.handleClick}/>
                {todo.text}:{index}
            </p>
        )

    }
}


export default App;