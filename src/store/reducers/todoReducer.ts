import {TodoAction, TodoEnum, TodoState} from "../../types/todo";


const initState: TodoState = {
    todos: []
}


export const todoReducer = (state = initState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoEnum.ADD_TODO:
            return {todos: [...state.todos, {id: Date.now(), done: false, title: action.payload.toString()}]}
        case TodoEnum.REMOVE_TODO:
            return {todos: state.todos.filter(todo=> todo.id !== action.payload)}
        case TodoEnum.DONE_TODO:
            return {todos: state.todos.map(todo=> todo.id === action.payload ? {...todo, done: !todo.done} : todo)}
        default:
            return state
    }
}