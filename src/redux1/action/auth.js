import {
    LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT_REQUEST, LOGOUT_FAIL, LOGOUT_SUCCESS, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL, LOAD_CLIENT_FAIL, LOAD_CLIENT_REQUEST, LOAD_CLIENT_SUCCESS, LOAD_ADMIN_REQUEST, LOAD_ADMIN_FAIL, LOAD_ADMIN_SUCCESS, LOAD_CLIENT_DETAILS_SUCCESS,
    LOAD_CLIENT_DETAILS_REQUEST, LOAD_CLIENT_DETAILS_FAIL, LOAD_CLIENT_DELETE_FAIL, LOAD_CLIENT_DELETE_SUCCESS, LOAD_CLIENT_DELETE_REQUEST, ADD_CLIENT_REQUEST, ADD_CLIENT_SUCCESS, ADD_CLIENT_FAIL, EDIT_CLIENT_REQUEST, EDIT_CLIENT_SUCCESS, EDIT_CLIENT_FAIL, ADD_STAFFS_REQUEST, ADD_STAFFS_SUCCESS, ADD_STAFFS_FAIL, LOAD_STAFFS_REQUEST, LOAD_STAFFS_SUCCESS, LOAD_STAFFS_FAIL, EDIT_STAFFS_REQUEST, EDIT_STAFFS_SUCCESS, EDIT_STAFFS_FAIL, LOAD_STAFFS_DETAILS_REQUEST, LOAD_STAFFS_DETAILS_SUCCESS, LOAD_STAFFS_DETAILS_FAIL, LOAD_STAFFS_DELETE_REQUEST, LOAD_STAFFS_DELETE_SUCCESS, LOAD_STAFFS_DELETE_FAIL, LOAD_RATE_REQUEST, LOAD_RATE_SUCCESS, LOAD_RATE_FAIL, LOAD_EVENT_SUCCESS, LOAD_EVENT_FAIL, LOAD_EVENT_REQUEST, ADD_EVENT_REQUEST, ADD_EVENT_SUCCESS, ADD_EVENT_FAIL, EVENT_DELETE_REQUEST, EVENT_DELETE_SUCCESS, EVENT_DELETE_FAIL, ADD_EMPLOYEE_FAIL, ADD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_SUCCESS, LOAD_EMPLOYEE_REQUEST, LOAD_EMPLOYEE_FAIL, LOAD_EMPLOYEE_SUCCESS, ADD_STAFFRATE_REQUEST, ADD_STAFFRATE_SUCCESS, EDIT_EVENT_REQUEST, EDIT_EVENT_SUCCESS, EDIT_EVENT_FAIL, UPDATE_ISADMINAPPROVAL_FAIL, UPDATE_ISADMINAPPROVAL_SUCCESS, UPDATE_ISADMINAPPROVAL_REQUEST, UPDATE_ADMINSTATUS_REQUEST, UPDATE_ADMINSTATUS_SUCCESS, UPDATE_ADMINSTATUS_FAIL
} from '../constant/authConstant'
import axios from 'axios'
import { useSelector } from 'react-redux'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })

        const config = { headers: { 'Content-Type': 'application/json', 'x-api-key': '23124134' } }
        const { data } = await axios.post(
            `http://rostering.delshagroup.com/admin/login`,
            { email, password },
            config
        )
        dispatch({
            type: LOGIN_SUCCESS,
            payload: localStorage.setItem('admin', JSON.stringify(data.admin)),
            token: localStorage.setItem('token', JSON.stringify(data.token)),
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
        dispatch({ type: LOAD_ADMIN_FAIL, payload: error.message })
    }
}

export const addClient = ({ name, email, address, department, contact }) => async (dispatch) => {
    try {
        dispatch({ type: ADD_CLIENT_REQUEST })

        const token = JSON.parse(localStorage.getItem('token'))

        const config = { headers: { 'x-api-key': '23124134', Authorization: `Bearer ${token}` } }
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
            payload: data
        })
    } catch (error) {
        dispatch({ type: ADD_CLIENT_FAIL, payload: error.response.data.message })
    }
}

export const editClient = ({ id, name, email, address, department, contact }) => async (dispatch) => {
    try {
        dispatch({ type: EDIT_CLIENT_REQUEST })

        const token = JSON.parse(localStorage.getItem('token'))

        const config = { headers: { 'x-api-key': '23124134', Authorization: `Bearer ${token}` } }
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
            payload: data
        })
    } catch (error) {
        dispatch({ type: EDIT_CLIENT_FAIL, payload: error.response.data.message })
    }
}

export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT_REQUEST })
        dispatch({
            type: LOGOUT_SUCCESS,
            payload: localStorage.removeItem('admin')
        })
    } catch (error) {
        dispatch({ type: LOGOUT_FAIL, payload: 'cannot logout' })
    }
}

export const ClientsList = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_CLIENT_REQUEST })

        const config = { headers: { 'x-api-key': '23124134' } }
        const { data } = await axios.get(
            `http://rostering.delshagroup.com/client`,
            config
        )

        dispatch({
            type: LOAD_CLIENT_SUCCESS,
            payload: data

        })
    } catch (error) {
        dispatch({ type: LOAD_CLIENT_FAIL, payload: error.message })
    }
}

export const Clients = (currentPage) => async (dispatch) => {
    try {
        dispatch({ type: LOAD_CLIENT_REQUEST })

        const config = { headers: { 'x-api-key': '23124134' } }
        const { data } = await axios.get(
            `http://rostering.delshagroup.com/client?pageSize=10&page=${currentPage}&`,
            config
        )

        dispatch({
            type: LOAD_CLIENT_SUCCESS,
            payload: data

        })
    } catch (error) {
        dispatch({ type: LOAD_CLIENT_FAIL, payload: error.message })
    }
}

export const ClientDetails = ({ id }) => async (dispatch) => {
    try {
        dispatch({ type: LOAD_CLIENT_DETAILS_REQUEST })
        const token = JSON.parse(localStorage.getItem('token'))

        const config = { headers: { 'x-api-key': '23124134', Authorization: `Bearer ${token}` } }
        const { data } = await axios.get(
            `http://rostering.delshagroup.com/client/${id}`,
            config
        )

        dispatch({
            type: LOAD_CLIENT_DETAILS_SUCCESS,
            payload: data

        })
    } catch (error) {
        dispatch({ type: LOAD_CLIENT_DETAILS_FAIL, payload: error.message })
    }
}

export const ClientDelete = ({ id }) => async (dispatch) => {
    try {
        dispatch({ type: LOAD_CLIENT_DELETE_REQUEST })
        const token = JSON.parse(localStorage.getItem('token'))

        const config = { headers: { 'x-api-key': '23124134', Authorization: `Bearer ${token}` } }
        const { data } = await axios.delete(
            `http://rostering.delshagroup.com/client/${id}`,
            config
        )

        dispatch({
            type: LOAD_CLIENT_DELETE_SUCCESS,
            payload: data

        })
    } catch (error) {
        dispatch({ type: LOAD_CLIENT_DELETE_FAIL, payload: error.message })
    }
}
export const Staffs = (currentPage) => async (dispatch) => {
    try {
        dispatch({ type: LOAD_STAFFS_REQUEST })

        const token = JSON.parse(localStorage.getItem('token'))

        const config = { headers: { 'x-api-key': '23124134', Authorization: `Bearer ${token}` } }
        const { data } = await axios.get(
            `http://rostering.delshagroup.com/staff?pageSize=10&page=${currentPage}&`,
            config
        )

        dispatch({
            type: LOAD_STAFFS_SUCCESS,
            payload: data

        })
    } catch (error) {
        dispatch({ type: LOAD_STAFFS_FAIL, payload: error.message })
    }
}

export const addStaffs = ({ name, email, address, department, contact, rate }) => async (dispatch) => {
    try {
        dispatch({ type: ADD_STAFFS_REQUEST })

        const token = JSON.parse(localStorage.getItem('token'))

        const config = { headers: { 'x-api-key': '23124134', Authorization: `Bearer ${token}` } }
        const { data } = await axios.post(
            `http://rostering.delshagroup.com/staff`,
            {
                name,
                email,
                address,
                contact,
                department,
                rate
            },
            config
        )
        dispatch({
            type: ADD_STAFFS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({ type: ADD_STAFFS_FAIL, payload: error.response.data.message })
    }
}

export const editStaffs = ({ id, name, email, address, department, contact }) => async (dispatch) => {
    try {
        dispatch({ type: EDIT_STAFFS_REQUEST })

        const token = JSON.parse(localStorage.getItem('token'))

        const config = { headers: { 'x-api-key': '23124134', Authorization: `Bearer ${token}` } }
        const { data } = await axios.put(
            `http://rostering.delshagroup.com/staff/${id}`,
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
            type: EDIT_STAFFS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({ type: EDIT_STAFFS_FAIL, payload: error.response.data.message })
    }
}

export const StaffsDetails = ({ id }) => async (dispatch) => {
    try {
        dispatch({ type: LOAD_STAFFS_DETAILS_REQUEST })
        const token = JSON.parse(localStorage.getItem('token'))

        const config = { headers: { 'x-api-key': '23124134', Authorization: `Bearer ${token}` } }
        const { data } = await axios.get(
            `http://rostering.delshagroup.com/staff/${id}`,
            config
        )

        dispatch({
            type: LOAD_STAFFS_DETAILS_SUCCESS,
            payload: data

        })
    } catch (error) {
        dispatch({ type: LOAD_STAFFS_DETAILS_FAIL, payload: error.message })
    }
}

export const StaffsDelete = ({ id }) => async (dispatch) => {
    try {
        dispatch({ type: LOAD_STAFFS_DELETE_REQUEST })
        const token = JSON.parse(localStorage.getItem('token'))

        const config = { headers: { 'x-api-key': '23124134', Authorization: `Bearer ${token}` } }
        const { data } = await axios.delete(
            `http://rostering.delshagroup.com/staff/${id}`,
            config
        )

        dispatch({
            type: LOAD_STAFFS_DELETE_SUCCESS,
            payload: data

        })
    } catch (error) {
        dispatch({ type: LOAD_STAFFS_DELETE_FAIL, payload: error.message })
    }
}

export const ShowRate = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_RATE_REQUEST })

        const token = JSON.parse(localStorage.getItem('token'))

        const config = { headers: { 'x-api-key': '23124134', Authorization: `Bearer ${token}` } }
        const { data } = await axios.get(
            `http://rostering.delshagroup.com/rate`,
            config
        )

        dispatch({
            type: LOAD_RATE_SUCCESS,
            payload: data.rates

        })
    } catch (error) {
        dispatch({ type: LOAD_RATE_FAIL, payload: error.message })
    }
}

export const loadEvent = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_EVENT_REQUEST })

        const token = JSON.parse(localStorage.getItem('token'))

        const config = { headers: { 'x-api-key': '23124134', Authorization: `Bearer ${token}` } }
        const { data } = await axios.get(
            `http://rostering.delshagroup.com/event`,
            config
        )

        dispatch({
            type: LOAD_EVENT_SUCCESS,
            payload: data

        })
    } catch (error) {
        dispatch({ type: LOAD_EVENT_FAIL, payload: error.message })
    }
}

export const addEvents = (obj) => async (dispatch) => {
    try {
        dispatch({ type: ADD_EVENT_REQUEST })
        const { title, start_date, end_date, client_id, staff_id, client_rate} = obj
        const token = JSON.parse(localStorage.getItem('token'))
        const config = { headers: { 'x-api-key': '23124134', Authorization: `Bearer ${token}` } }
        console.log(obj)

        const { data } = await axios.post(
            `http://rostering.delshagroup.com/event`,
            {
                title,
                start_date,
                department: '',
                end_date,
                client_id,
                staff_id,
                client_rate,
                staff_rate: ''
            },
            config
        )
        dispatch({
            type: ADD_EVENT_SUCCESS,
            payload: data

        })
    } catch (error) {
        dispatch({ type: ADD_EVENT_FAIL, payload: error.message })
    }
}

export const updateFilter = filter => {
    return (dispatch, getState) => {
      dispatch({
        type: 'UPDATE_FILTERS',
        filter
      })
      dispatch(loadEvent(getState().calendar.selectedCalendars))
    }
  }

  export const updateAllFilters = value => {
    return (dispatch, getState) => {
      dispatch({
        type: 'UPDATE_ALL_FILTERS',
        value
      })
      dispatch(loadEvent(getState().calendar.selectedCalendars))
    }
  }

  export const selectEvent = event => {
    return dispatch => {
      dispatch({
        type: 'SELECT_EVENT',
        event
      })
    }
}
  
export const addEmployee = (obj) => async (dispatch) => {
    try {
        dispatch({ type: ADD_EMPLOYEE_REQUEST })
        const {name, email, password} = obj
        const token = JSON.parse(localStorage.getItem('token'))
        const config = { headers: { 'x-api-key': '23124134', Authorization: `Bearer ${token}` } }
        console.log(obj)

        const { data } = await axios.post(
            `http://rostering.delshagroup.com/admin`,
            {
                name,
                email,
                password
                
            },
            config
        )
        dispatch({
            type: ADD_EMPLOYEE_SUCCESS,
            payload: data

        })
    } catch (error) {
        dispatch({ type: ADD_EMPLOYEE_FAIL, payload: error.message })
    }
}

export const loadEmploee = () => async (dispatch) => {
    try { 
        dispatch({ type: LOAD_EMPLOYEE_REQUEST})

        const token = JSON.parse(localStorage.getItem('token'))

        const config = { headers: { 'x-api-key': '23124134', Authorization: `Bearer ${token}` } }
        const { data } = await axios.get(
            `http://rostering.delshagroup.com/admin`,
            config
        )

        dispatch({
            type:LOAD_EMPLOYEE_SUCCESS,
            payload: data

        })
    } catch (error) {
        dispatch({ type: LOAD_EMPLOYEE_FAIL, payload: error.message })
    }
}

export const addStaffrate = (obj) => async (dispatch) => {
    try {
        dispatch({ type: ADD_STAFFRATE_REQUEST})
        const {rate} = obj
        const token = JSON.parse(localStorage.getItem('token'))
        const config = { headers: { 'x-api-key': '23124134', Authorization: `Bearer ${token}` } }
        console.log(obj)

        const { data } = await axios.post(
            `http://rostering.delshagroup.com/rate`,
            {
               rate
            },
            config
        )
        dispatch({
            type: ADD_STAFFRATE_SUCCESS,
            payload: data

        })
    } catch (error) {
        dispatch({ type: ADD_EMPLOYEE_FAIL, payload: error.message })
    }
}

export const updateEvent = (obj) => async (dispatch) => {
    try {
        dispatch({ type: EDIT_EVENT_REQUEST })

        const token = JSON.parse(localStorage.getItem('token'))
        const { title, start_date, end_date, client_id, staff_id, client_rate, uuidd, rateArray} = obj
        const config = { headers: { 'x-api-key': '23124134', Authorization: `Bearer ${token}` } }
        const { data } = await axios.put(
            `http://rostering.delshagroup.com/event/${uuidd}`,
            {
                title,
                start_date,
                department: '',
                end_date,
                client_id,
                staff_id,
                client_rate,
                staff_rate:rateArray
            },
            config
        )
        dispatch({
            type: EDIT_EVENT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({ type: EDIT_EVENT_FAIL, payload: error.response.data.message })
    }
}

export const updateAdminApproval = (uuid, {isAdminApproval}) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_ISADMINAPPROVAL_REQUEST })

        const token = JSON.parse(localStorage.getItem('token'))
        const config = { headers: { 'x-api-key': '23124134', Authorization: `Bearer ${token}` } }
        const { data } = await axios.put(
            `http://rostering.delshagroup.com/event/admin/${uuid}`,
            
            {
             isAdminApproval
            },
            config
        )
        dispatch({
            type: UPDATE_ISADMINAPPROVAL_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({ type:UPDATE_ISADMINAPPROVAL_FAIL, payload: error.response.data.message })
    }
}

export const updateAdminStatus = (uuid, {active}) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_ADMINSTATUS_REQUEST})

        const token = JSON.parse(localStorage.getItem('token'))
        const config = { headers: { 'x-api-key': '23124134', Authorization: `Bearer ${token}` } }
        const { data } = await axios.put(
            `http://rostering.delshagroup.com/admin/status/${uuid}`,
            
            {
             active
            },
            config
        )
        dispatch({
            type: UPDATE_ADMINSTATUS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({ type:UPDATE_ADMINSTATUS_FAIL, payload: error.response.data.message })
    }
}