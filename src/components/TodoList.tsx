import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelect";

const TodoList: FC = () => {
    const todos = useTypedSelector(state => state.todos)
    return (
        <div>
            {todos.map(todo=> <div key={todo.id}>{todo.title}</div>)}
        </div>
    );
};

export default TodoList;