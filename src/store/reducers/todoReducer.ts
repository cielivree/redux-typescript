import { TodoAction, TodoState } from "../../types/todo"

export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
    switch (action.type) {
        default:
            return state
    }
}