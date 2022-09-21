import React from 'react'
import { connect } from 'react-redux'
import loginForm from '../pure/loginForm'
import { httpsRequest } from '../../store/actions/asyncActions';

const mapStateToProps = (state) => {
    return {
        loged: state.userState.loged,
        fetching: state.userState.fetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => {
            const data = {
                email: email,
                password: password
            };
            const url = 'https://reqres.in/api/login';
            dispatch(httpsRequest('post', url, data))
        }
    }
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(loginForm)

export default LoginFormContainer