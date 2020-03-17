import React from 'react';

const TodoItem = props =>{
    return (
        <li>{props.todo.name}</li>
    )
}

export default TodoItem;