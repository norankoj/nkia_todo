import React, {Component} from 'react';
import nkia from './nkia.png';
import './App.css';
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
        /*
        list = [
            { todoText: '할 일', index: 0, complete: true },
            { todoText: '할 일2', index: 1, complete: false },
            { todoText: '할 일3', index: 2, complete: false },
        ]
         */
    }

    inputValue(value) {
        this.setState({
                myMessage: value
            }
        )
    }
    addInputValue(value) {
        this.setState((state) => {
            return {
                list: state.list.concat(value),
                myMessage: ''
            }
        });


    }
    handleTodoRemove = (val) => {
        this.setState((state) => {
            return {
                list: state.list.filter(todo => todo !== val)
            }
        });

    }
    handleTodoComplete = (val) => {
        this.setState((state) => {
            return {
                list : state.list.filter(todo => todo !== val),
                checkNum : state.checkNum + 1
            }
        })
    }

    // arrowFunction = (인자) => 반환
    handleTodoChange = (e) => this.inputValue(e.target.value)

    handleTodoAdd = () => this.addInputValue(this.state.myMessage)

    render() {
        return (
            <div className="todo_list">

                <TodoHeader logo={nkia} todoText={this.state.myMessage} onTodoChange={this.handleTodoChange} onTodoAdd={this.handleTodoAdd} />
                <TodoContents todoItems={this.state.list} onTodoComplete={this.handleTodoComplete} onTodoRemove={this.handleTodoRemove}
                              completeCount={this.state.checkNum}/>
            </div>
        );
    }



}

export default App;

