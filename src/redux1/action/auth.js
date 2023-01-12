import {LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT_REQUEST, LOGOUT_FAIL, LOGOUT_SUCCESS, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL, LOAD_CLIENT_FAIL, LOAD_CLIENT_REQUEST, LOAD_CLIENT_SUCCESS, LOAD_ADMIN_REQUEST, LOAD_ADMIN_FAIL, LOAD_ADMIN_SUCCESS} from '../constant/authConstant'
import axios from 'axios'

export const login = (email, password) => async (dispatch) => {
try {
dispatch({ type: LOGIN_REQUEST })

const config = { headers: { 'Content-Type': 'application/json', 'x-api-key':'23124134' } }
const { data } = await axios.post(
`http://rostering.delshagroup.com/admin/login`,
{ email, password },
config
)
dispatch({
type: LOGIN_SUCCESS,
payload: localStorage.setItem('admin', JSON.stringify(data.admin)),
admin: JSON.parse(localStorage.getItem('admin'))
})
} catch (error) {
dispatch({ type: LOGIN_FAIL, payload: error.response.data.message })
}
}

export const admin = () => async (dispatch) => {
try {
dispatch({ type: LOAD_ADMIN_REQUEST })
if (localStorage.getItem("admin") === null || localStorage.getItem("admin") === undefined) {
throw new Error('Whoops!')
} 
dispatch({
type: LOAD_ADMIN_SUCCESS,
admin: JSON.parse(localStorage.getItem('admin'))
})     
} catch (error) {
dispatch({type:LOAD_ADMIN_FAIL, payload: error.message})
}
}

export const logout = () => async (dispatch) => {
try {
    dispatch({ type: LOGOUT_REQUEST })
    dispatch({
        type: LOGOUT_SUCCESS,
        payload: localStorage.removeItem('admin')
})
}  catch (error) {
dispatch({type:LOGOUT_FAIL, payload:'cannot logout'})
}
}

export const Clients = () => async (dispatch) => {
try {
    dispatch({ type: LOAD_CLIENT_REQUEST })

    const config = { headers: { 'x-api-key':'23124134' } }
const { data } = await axios.get(
`http://rostering.delshagroup.com/client`,
config
    )
    
    dispatch({
        type: LOAD_CLIENT_SUCCESS,
        payload:data
        
})
}  catch (error) {
dispatch({type:LOAD_CLIENT_FAIL, payload:error.message})
}
}