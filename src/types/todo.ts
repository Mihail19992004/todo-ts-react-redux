 interface ITodo {
    title: string
    id: number
    done: boolean
}
export interface TodoState {
    todos: ITodo[]
}


export enum TodoEnum {
    ADD_TODO = "ADD_TODO",
    DONE_TODO = "DONE_TODO",
    REMOVE_TODO = "REMOVE_TODO"
}
interface IAddTodo {
    type: TodoEnum.ADD_TODO
    payload: ITodo
}
interface IDoneTodo {
    type: TodoEnum.DONE_TODO
    payload: number
}
interface IRemoveTodo {
    type: TodoEnum.REMOVE_TODO
    payload: number
}
export type TodoAction = IAddTodo| IDoneTodo | IRemoveTodo