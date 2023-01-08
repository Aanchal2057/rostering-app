import {LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT_REQUEST, LOGOUT_FAIL, LOGOUT_SUCCESS, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL} from '../constant/authConstant'
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
    payload: data.admin,
    store: localStorage.setItem('isAuth', true),
    storage: localStorage.getItem('isAuth')

})
} catch (error) {
dispatch({ type: LOGIN_FAIL, payload: error.response.data.message })
}
}
export const logout = () => async (dispatch) => {
try {
    dispatch({ type: LOGOUT_REQUEST })
    dispatch({
        type: LOGOUT_SUCCESS,
        store: localStorage.setItem('isAuth', false),
    storage: localStorage.getItem('isAuth')
        
})
}  catch (error) {
dispatch({type:LOGOUT_FAIL, payload:'cannot logout'})
}
}


export const isAuth = () => async (dispatch) => {
try {
    dispatch({ type: LOAD_USER_REQUEST })

    dispatch({
        type: LOAD_USER_SUCCESS,
           storage: localStorage.getItem('isAuth')

        
})
}  catch (error) {
dispatch({type:LOAD_USER_FAIL, payload:'user not found'})
}
}