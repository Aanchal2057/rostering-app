import {LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL} from '../constant/authConstant'

const authReducer = (state = { admin: {} }, action) => {
switch (action.type) {
        case LOGIN_REQUEST:
                case LOAD_USER_REQUEST:
return { loading: true, isAuthenticated: undefined }
case LOGOUT_REQUEST:
                return { loading: true }
        case LOAD_USER_SUCCESS:
                return {
                isAuthenticated: action.storage
        }
case LOGIN_SUCCESS:
return {
...state,
loading: false,
isAuthenticated: action.storage,
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
                case LOAD_USER_FAIL:
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