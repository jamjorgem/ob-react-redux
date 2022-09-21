import React from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../../store/actions/actions'
import TodoForm from '../todoForm'


const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispacth) => {
    return {
        submit: (text) => {
            dispacth(addToDo(text))
        }
    }
}

const todoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm)
export default todoFormContainer