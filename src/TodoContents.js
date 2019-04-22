import React, {Component, Fragment} from 'react';
import del from "./delete.png";
import PropTypes from "prop-types";

class TodoContents extends Component {
    static propTypes = {
        todoItems: PropTypes.arrayOf(PropTypes.string.isRequired),
        completeCount: PropTypes.number.isRequired,
        onTodoComplete: PropTypes.func.isRequired,
        onTodoRemove: PropTypes.func.isRequired,
    }
    static defaultProps = {
        completeCount: 0,
    }

    render() {
        const { todoItems, completeCount, onTodoComplete, onTodoRemove } = this.props;
        return (
            <Fragment>
                <div className="todo_content">
                    <ul className="todo_myList">
                        {(todoItems && todoItems.length)
                            ? todoItems.map((val) =>
                            <li className="fix" key={val}>
                                <input type="checkbox"
                                       className="check"
                                       onClick={()=>onTodoComplete(val)}
                                />
                                &nbsp; {val} &nbsp;
                                <img src={del}
                                     className="delCheck"
                                     onClick={() => onTodoRemove(val)}
                                />
                            </li>)
                            :
                            <li>할 일을 추가하세요.</li>
                        }
                    </ul>

                </div>

                <p>완료 수 : {completeCount} </p>
            </Fragment>
        );
    }
}

export default TodoContents;
