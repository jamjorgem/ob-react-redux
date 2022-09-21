import { ADD_TODO, TOGGLETODO } from "../actions/actions";

let initialState = [];

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.payload.id,
                    text: action.payload.text,
                    completed: false
                }
            ]
        case TOGGLETODO:
            return state.map((todo) =>
                (todo.id === action.payload.id)
                    ?
                    {
                        ...todo,
                        completed: !todo.completed
                    }
                    :
                    todo
            )

        default:
            return state;
    }
}