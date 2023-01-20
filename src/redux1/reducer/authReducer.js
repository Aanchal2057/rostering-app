import {LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL, LOAD_CLIENT_FAIL, LOAD_CLIENT_REQUEST, LOAD_CLIENT_SUCCESS, LOAD_ADMIN_REQUEST, LOAD_ADMIN_SUCCESS, LOAD_ADMIN_FAIL, LOAD_CLIENT_DETAILS_REQUEST, LOAD_CLIENT_DETAILS_SUCCESS, LOAD_CLIENT_DETAILS_FAIL, LOAD_CLIENT_DELETE_FAIL, LOAD_CLIENT_DELETE_SUCCESS, LOAD_CLIENT_DELETE_REQUEST, ADD_CLIENT_REQUEST, ADD_CLIENT_SUCCESS, ADD_CLIENT_FAIL, EDIT_CLIENT_REQUEST, EDIT_CLIENT_SUCCESS, EDIT_CLIENT_FAIL,

    LOAD_STAFFS_FAIL, LOAD_STAFFS_REQUEST, LOAD_STAFFS_SUCCESS,  LOAD_STAFFS_DETAILS_REQUEST, LOAD_STAFFS_DETAILS_SUCCESS, LOAD_STAFFS_DETAILS_FAIL, LOAD_STAFFS_DELETE_FAIL, LOAD_STAFFS_DELETE_SUCCESS, LOAD_STAFFS_DELETE_REQUEST, ADD_STAFFS_REQUEST, ADD_STAFFS_SUCCESS, ADD_STAFFS_FAIL, EDIT_STAFFS_REQUEST, EDIT_STAFFS_SUCCESS, EDIT_STAFFS_FAIL} from '../constant/authConstant'

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
        case EDIT_CLIENT_REQUEST:
    case LOAD_CLIENT_DELETE_REQUEST:
        case ADD_CLIENT_REQUEST:
return { loading: true}
    case LOAD_CLIENT_SUCCESS:
        case ADD_CLIENT_SUCCESS:
    case LOAD_CLIENT_DELETE_SUCCESS:
        case EDIT_CLIENT_SUCCESS:
        case LOAD_CLIENT_DETAILS_SUCCESS:
        return { ...state, loading: false, client: action.payload }
    
    case LOAD_CLIENT_FAIL:
        case ADD_CLIENT_FAIL:
    case LOAD_CLIENT_DETAILS_FAIL:
        case EDIT_CLIENT_FAIL:
        case LOAD_CLIENT_DELETE_FAIL:
return {
...state,
loading: false,
error: action.payload
}
default:
return state
}
}

export const Staffs = (state = { staffs: {} }, action) => {
    switch (action.type) {
        case LOAD_STAFFS_REQUEST:
        case LOAD_STAFFS_DETAILS_REQUEST:
            case EDIT_STAFFS_REQUEST:
        case LOAD_STAFFS_DELETE_REQUEST:
            case ADD_STAFFS_REQUEST:
    return { loading: true}
        case LOAD_STAFFS_SUCCESS:
            case ADD_STAFFS_SUCCESS:
        case LOAD_STAFFS_DELETE_SUCCESS:
            case EDIT_STAFFS_SUCCESS:
            case LOAD_STAFFS_DETAILS_SUCCESS:
            return { ...state, loading: false, staffs: action.payload }
        
        case LOAD_STAFFS_FAIL:
            case ADD_STAFFS_FAIL:
        case LOAD_STAFFS_DETAILS_FAIL:
            case EDIT_STAFFS_FAIL:
            case LOAD_STAFFS_DELETE_FAIL:
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