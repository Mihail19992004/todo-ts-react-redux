import {createStore} from "redux";
import {todoReducer} from "./reducers/todoReducer";

export const store = createStore(todoReducer)


export type RootState= ReturnType<typeof todoReducer>