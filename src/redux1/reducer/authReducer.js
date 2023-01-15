import {LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL, LOAD_CLIENT_FAIL, LOAD_CLIENT_REQUEST, LOAD_CLIENT_SUCCESS, LOAD_ADMIN_REQUEST, LOAD_ADMIN_SUCCESS, LOAD_ADMIN_FAIL, LOAD_CLIENT_DETAILS_REQUEST, LOAD_CLIENT_DETAILS_SUCCESS, LOAD_CLIENT_DETAILS_FAIL} from '../constant/authConstant'

const authReducer = (state = { admin: {} }, action) => {
switch (action.type) {
case LOGIN_REQUEST:
case LOAD_ADMIN_REQUEST:
case LOGOUT_REQUEST:
return {
loading: true,
isAuth: undefined
}
case LOGIN_SUCCESS:
case LOAD_ADMIN_SUCCESS:
return { 
...state,
isAuth:true,
loading: false,
admin: action.admin
}
case LOGIN_FAIL:
return {
...state,
loading: false,
isAuth:false,
error: action.payload
}
case LOGOUT_SUCCESS:
return {
loading: false,
isAuth:false
}
case LOGOUT_FAIL:
case LOAD_ADMIN_FAIL:
return {
...state,
loading: false,
error: action.payload
}
default:
return state
}
}

export const Clients = (state = { client: {} }, action) => {
switch (action.type) {
    case LOAD_CLIENT_REQUEST:
        case LOAD_CLIENT_DETAILS_REQUEST:
return { loading: true}
    case LOAD_CLIENT_SUCCESS:
        case LOAD_CLIENT_DETAILS_SUCCESS:
        return { ...state, loading: false, client: action.payload }
    
    case LOAD_CLIENT_FAIL:
        case LOAD_CLIENT_DETAILS_FAIL:
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