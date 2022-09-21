//async actions types
export const API_CALL_REQUEST = 'API_CALL_REQUEST';//wather saga listens
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS'; //dispachedby worked saga
export const API_CALL_FAILURE = 'API_CALL_FAILURE';//dispachedby worked saga

export const login = (email, password) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            request: {
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: {
                    email: email,
                    password: password
                },
            },
            okAction: API_CALL_REQUEST,
            failAction: API_CALL_FAILURE
        }
    }
}

//CONEXION GENERICA
export const httpsRequest = (method, url, data) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            request: {
                method: method,
                url: url,
                data: data,
            },
            okAction: API_CALL_REQUEST,
            failAction: API_CALL_FAILURE
        }
    }
}