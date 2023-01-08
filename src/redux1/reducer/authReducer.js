import {LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL} from '../constant/authConstant'

const authReducer = (state = { admin: {} }, action) => {
switch (action.type) {
case LOGIN_REQUEST:
return { loading: true, isAuthenticated: undefined }
case LOGOUT_REQUEST:
return { loading: true, isAuthenticated: true }
case LOGIN_SUCCESS:
return {
...state,
loading: false,
isAuthenticated: true,
admin: action.payload
}
case LOGIN_FAIL:
return {
...state,
loading: false,
isAuthenticated: false,
error: action.payload
}
case LOGOUT_SUCCESS:
return {
loading: false,
isAuthenticated: false
        }
case LOGOUT_FAIL:
return {
...state,
loading: false,

error: action.payload
}
default:
return state
}
}

export default authReducer