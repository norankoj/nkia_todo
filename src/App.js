import React, { Component } from 'react';
import logo from './logo.svg';
import nkia from './nkia.png';
import del from './delete.png';
import './App.css';
import {Promise as onReject} from "q";
import TodoHeader from "./TodoHeader";
import TodoContents from "./TodoContents";

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            myMessage : '',
            list : [],
            checkNum : 0
        }
    }

    inputValue(value) {
        this.setState({
                myMessage: value
            }
        )
    }
    addInputValue(value) {
        let listArray = this.state.list;
        listArray.push(value);

        this.setState({
            list: listArray,
            myMessage: ''
        })

    }
    handleTodoRemove = (val) => {
        let list = this.state.list;
        this.setState({
            list : list.filter(num => num !== val)
        })
    }
    handleTodoComplete = (val) => {
        let list = this.state.list;

        this.setState({
            list : list.filter(num => num !== val),
            checkNum : this.state.checkNum + 1
        })

    }

    // arrowFunction = (인자) => 반환
    handleTodoChange = (e) => this.inputValue(e.target.value)

    handleTodoAdd = () => this.addInputValue(this.state.myMessage)

    render() {
        return (
            <div className="todo_list">

                <TodoHeader logo={nkia} todoText={this.state.myMessage} onTodoChange={this.handleTodoChange} onTodoAdd={this.handleTodoAdd} />
                <TodoContents todoItems={this.state.list} onTodoComplete={this.handleTodoComplete} onTodoRemove={this.handleTodoRemove}/>
            </div>
        );
    }



}

export default App;

