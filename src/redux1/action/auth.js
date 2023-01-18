import {LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT_REQUEST, LOGOUT_FAIL, LOGOUT_SUCCESS, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL, LOAD_CLIENT_FAIL, LOAD_CLIENT_REQUEST, LOAD_CLIENT_SUCCESS, LOAD_ADMIN_REQUEST, LOAD_ADMIN_FAIL, LOAD_ADMIN_SUCCESS, LOAD_CLIENT_DETAILS_SUCCESS, LOAD_CLIENT_DETAILS_REQUEST, LOAD_CLIENT_DETAILS_FAIL, LOAD_CLIENT_DELETE_FAIL, LOAD_CLIENT_DELETE_SUCCESS, LOAD_CLIENT_DELETE_REQUEST, ADD_CLIENT_REQUEST, ADD_CLIENT_SUCCESS, ADD_CLIENT_FAIL, EDIT_CLIENT_REQUEST, EDIT_CLIENT_SUCCESS, EDIT_CLIENT_FAIL} from '../constant/authConstant'
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

export const addClient = ({name, email, address, department, contact}) => async (dispatch) => {
try {
dispatch({ type: ADD_CLIENT_REQUEST })

 const config = { headers: { 'x-api-key':'23124134', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMGI1YmE4MjAtNjNmNi00ZDg4LTkwODgtNTcwODI1ZTJlMzU1IiwiaWF0IjoxNjcxNDc0NDE0LCJleHAiOjE2NzQwNjY0MTR9.NcX8AHzZgxWjEEuK0KYBXOWxK3opjOWPDcP_sRQdD9w' } }
const { data } = await axios.post(
`http://rostering.delshagroup.com/client`,
    {
        name,
        email,
        address,
        contact,
        department
    },
config
)
dispatch({
type: ADD_CLIENT_SUCCESS,
 payload:data
})
} catch (error) {
dispatch({ type: ADD_CLIENT_FAIL, payload: error.response.data.message })
}
}

export const editClient = ({id, name, email, address, department, contact}) => async (dispatch) => {
try {
dispatch({ type: EDIT_CLIENT_REQUEST })

 const config = { headers: { 'x-api-key':'23124134', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMGI1YmE4MjAtNjNmNi00ZDg4LTkwODgtNTcwODI1ZTJlMzU1IiwiaWF0IjoxNjcxNDc0NDE0LCJleHAiOjE2NzQwNjY0MTR9.NcX8AHzZgxWjEEuK0KYBXOWxK3opjOWPDcP_sRQdD9w' } }
const { data } = await axios.put(
`http://rostering.delshagroup.com/client/${id}`,
    {
        name,
        email,
        address,
        contact,
        department
    },
config
)
dispatch({
type: EDIT_CLIENT_SUCCESS,
 payload:data
})
} catch (error) {
dispatch({ type: EDIT_CLIENT_FAIL, payload: error.response.data.message })
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

export const Clients = (currentPage) => async (dispatch) => {
try {
    dispatch({ type: LOAD_CLIENT_REQUEST })

    const config = { headers: { 'x-api-key':'23124134' } }
const { data } = await axios.get(
`http://rostering.delshagroup.com/client?pageSize=10&page=${currentPage}&`,
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

export const ClientDetails = ({id}) => async (dispatch) => {
try {
    dispatch({ type: LOAD_CLIENT_DETAILS_REQUEST })
    const config = { headers: { 'x-api-key':'23124134', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMGI1YmE4MjAtNjNmNi00ZDg4LTkwODgtNTcwODI1ZTJlMzU1IiwiaWF0IjoxNjcxNDc0NDE0LCJleHAiOjE2NzQwNjY0MTR9.NcX8AHzZgxWjEEuK0KYBXOWxK3opjOWPDcP_sRQdD9w' } }
    const { data } = await axios.get(
        `http://rostering.delshagroup.com/client/${id}`,
        config
        )
    
    dispatch({
        type: LOAD_CLIENT_DETAILS_SUCCESS,
        payload:data
        
})
}  catch (error) {
dispatch({type:LOAD_CLIENT_DETAILS_FAIL, payload:error.message})
}
}

export const ClientDelete = ({id}) => async (dispatch) => {
try {
    dispatch({ type: LOAD_CLIENT_DELETE_REQUEST })
    const config = { headers: { 'x-api-key':'23124134', Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiMGI1YmE4MjAtNjNmNi00ZDg4LTkwODgtNTcwODI1ZTJlMzU1IiwiaWF0IjoxNjcxNDc0NDE0LCJleHAiOjE2NzQwNjY0MTR9.NcX8AHzZgxWjEEuK0KYBXOWxK3opjOWPDcP_sRQdD9w' } }
    const { data } = await axios.delete(
        `http://rostering.delshagroup.com/client/${id}`,
        config
        )
    
    dispatch({
        type: LOAD_CLIENT_DELETE_SUCCESS,
        payload:data
        
})
}  catch (error) {
dispatch({type:LOAD_CLIENT_DELETE_FAIL, payload:error.message})
}
}