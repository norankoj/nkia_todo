import React, { Component } from 'react';
import logo from './logo.svg';
import nkia from './nkia.png';
import del from './delete.png';
import './App.css';
import {Promise as onReject} from "q";

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            myMessage : null,
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
    valRemove(val){
        let list = this.state.list;
        this.setState({
            list : list.filter(num => num !== val)
        })
    }
    check(val) {
        let list = this.state.list;

        this.setState({
            list : list.filter(num => num !== val),
            checkNum : this.state.checkNum + 1
        })

    }


    render() {
        return (
            <div className="todo_list">
                <div className="todo_header">
                    <img src={nkia} className="App-logo" alt="logo" />
                    <input
                        type="text"
                        className="todo_input"
                        value={this.state.myMessage}
                        onChange={(e =>this.inputValue(e.target.value) )}
                    />
                    <button className="todo_button" onClick={()=>
                        this.addInputValue(this.state.myMessage)
                    }> save </button>

                </div>
                <div className="todo_content">
                    <ul className="todo_myList">
                        {this.state.list.map((val) =>
                            <li className="fix">
                                <input type="checkbox"
                                       className="check"
                                       onClick={()=>this.check(val)}
                                />
                                &nbsp; {val} &nbsp;
                                <img src={del}
                                     className="delCheck"
                                     onClick={() => this.valRemove(val)}
                                />
                            </li>)}
                    </ul>

                </div>

                <p>완료 수 : {this.state.checkNum} </p>

            </div>
        );
    }



}

export default App;

