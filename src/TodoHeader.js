import React, {Component} from 'react';

class TodoHeader extends Component {
    render() {
        const {
            logo,
            todoText,
            onTodoChange,
            onTodoAdd,
        } = this.props;
        return (
            <div className="todo_header">
                <img src={logo} className="App-logo" alt="logo" />
                <input
                    type="text"
                    className="todo_input"
                    value={todoText}
                    onChange={onTodoChange}
                />
                <button className="todo_button" onClick={onTodoAdd}> save </button>
            </div>
        );
    }
}

export default TodoHeader;
