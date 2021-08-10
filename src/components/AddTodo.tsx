import React, {FC, useState} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelect";
import {TodoEnum} from "../types/todo";

const AddTodo: FC = () => {
    const [add, setAdd] = useState('')
    const dispatch = useDispatch()
    const todos = useTypedSelector(state => state.todos)
    console.log(todos)
    return (
        <div className='todo-add-main'>
            <input type="text" value={add} onChange={(e)=> setAdd(e.target.value)}/>
            <div className="add" onClick={()=> dispatch({type: TodoEnum.ADD_TODO, payload: add})}>Добавить</div>
        </div>
    );
};

export default AddTodo;