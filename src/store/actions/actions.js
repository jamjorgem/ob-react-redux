let nextTodoID = 0;

export const ADD_TODO = 'ADD_TODO';
export const TOGGLETODO = 'TOGGLETODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const addToDo = (text) => {
    return {
        type: ADD_TODO,
        payload: {
            id: nextTodoID++,
            text
        }
    }
}

export const toggleToDo = (id) => {
    return {
        type: TOGGLETODO,
        payload: {
            id: nextTodoID,
        }
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter
        }

    }
}