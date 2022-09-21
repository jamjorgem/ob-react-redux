import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../pure/TodoList'
import { toggleToDo } from '../../store/actions/actions'


// filter todo list
const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed);
        default:
            return todos;
    }
}


const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todosState, state.filterstate)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleToDo(id))
        }
    }
}

//conectar stage y dispacth con todo list
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodosContainer;