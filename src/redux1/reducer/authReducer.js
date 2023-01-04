import {LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_REQUEST} from '../constant/authConstant'

const authReducer = (state = { admin: {} }, action) => {
switch (action.type) {
case LOGIN_REQUEST:
return { loading: true, isAuthenticated: undefined }
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
default:
return state
}
}

export default authReducer