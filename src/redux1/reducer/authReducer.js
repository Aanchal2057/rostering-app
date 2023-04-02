import {
    LOGIN_FAIL, LOGIN_SUCCESS, LOGIN_REQUEST, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL, LOAD_CLIENT_FAIL, LOAD_CLIENT_REQUEST, LOAD_CLIENT_SUCCESS, LOAD_ADMIN_REQUEST, LOAD_ADMIN_SUCCESS, LOAD_ADMIN_FAIL, LOAD_CLIENT_DETAILS_REQUEST, LOAD_CLIENT_DETAILS_SUCCESS, LOAD_CLIENT_DETAILS_FAIL, LOAD_CLIENT_DELETE_FAIL, LOAD_CLIENT_DELETE_SUCCESS, LOAD_CLIENT_DELETE_REQUEST, ADD_CLIENT_REQUEST, ADD_CLIENT_SUCCESS, ADD_CLIENT_FAIL, EDIT_CLIENT_REQUEST, EDIT_CLIENT_SUCCESS, EDIT_CLIENT_FAIL,
    LOAD_STAFFS_FAIL, LOAD_STAFFS_REQUEST, LOAD_STAFFS_SUCCESS, LOAD_STAFFS_DETAILS_REQUEST, LOAD_STAFFS_DETAILS_SUCCESS, LOAD_STAFFS_DETAILS_FAIL, LOAD_STAFFS_DELETE_FAIL, LOAD_STAFFS_DELETE_SUCCESS, LOAD_STAFFS_DELETE_REQUEST, ADD_STAFFS_REQUEST, ADD_STAFFS_SUCCESS, ADD_STAFFS_FAIL, EDIT_STAFFS_REQUEST, EDIT_STAFFS_SUCCESS, EDIT_STAFFS_FAIL, LOAD_RATE_REQUEST,
    LOAD_RATE_SUCCESS, LOAD_RATE_FAIL, LOAD_EVENT_SUCCESS, LOAD_EVENT_FAIL, LOAD_EVENT_REQUEST, LOAD_EVENT_DETAILS_FAIL, ADD_EVENT_REQUEST, ADD_EVENT_SUCCESS, ADD_EVENT_FAIL, LOAD_EMPLOYEE_REQUEST, ADD_EMPLOYEE_REQUEST, LOAD_EMPLOYEE_SUCCESS, ADD_EMPLOYEE_FAIL, ADD_EMPLOYEE_SUCCESS, LOAD_EMPLOYEE_FAIL, ADD_STAFFRATE_SUCCESS, ADD_STAFFRATE_REQUEST, ADD_STAFFRATE_FAIL, EDIT_EVENT_REQUEST, EDIT_EVENT_SUCCESS, EDIT_EVENT_FAIL, UPDATE_ISADMINAPPROVAL_REQUEST, UPDATE_ISADMINAPPROVAL_SUCCESS, UPDATE_ISADMINAPPROVAL_FAIL, UPDATE_ADMINSTATUS_REQUEST, UPDATE_ADMINSTATUS_SUCCESS, UPDATE_ADMINSTATUS_FAIL, GET_FILTER_REQUEST, GET_FILTER_SUCCESS, GET_FILTER_FAIL, GET_INVOICE_REQUEST, GET_INVOICE_SUCCESS, GET_INVOICE_FAIL, GET_COMPLETED_REQUEST, GET_COMPLETED_SUCCESS, GET_COMPLETED_FAIL, GENERATE_INVOICE_REQUEST, GENERATE_INVOICE_SUCCESS, GENERATE_INVOICE_FAIL, GET_CLIENT_INVOICE_REQUEST, GENERATE_CLIENT_INVOICE_REQUEST, GET_CLIENT_INVOICE_SUCCESS, GENERATE_CLIENT_INVOICE_SUCCESS, GET_CLIENT_INVOICE_FAIL, GENERATE_CLIENT_INVOICE_FAIL
} from '../constant/authConstant'

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
                isAuth: true,
                loading: false,
                admin: action.admin
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                isAuth: false,
                error: action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                loading: false,
                isAuth: false
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
            return { loading: true }
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

export const Staffs = (state = { staffs: [] }, action) => {
    switch (action.type) {
        case LOAD_STAFFS_REQUEST:
        case LOAD_STAFFS_DETAILS_REQUEST:
        case EDIT_STAFFS_REQUEST:
        case LOAD_STAFFS_DELETE_REQUEST:
        case ADD_STAFFS_REQUEST:
            return { loading: true }
        case LOAD_STAFFS_SUCCESS:
        case LOAD_STAFFS_DETAILS_SUCCESS:
        case LOAD_STAFFS_DELETE_SUCCESS:
        case ADD_STAFFS_SUCCESS:
        case EDIT_STAFFS_SUCCESS:
            return { ...state, loading: false, staffs: action.payload }

        case LOAD_STAFFS_FAIL:
        case LOAD_STAFFS_DETAILS_FAIL:
        case ADD_STAFFS_FAIL:
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

export const rate = (state = { rate: [] }, action) => {
    switch (action.type) {
        case LOAD_RATE_REQUEST:
        case ADD_STAFFRATE_REQUEST:

            return { loading: true }
        case LOAD_RATE_SUCCESS:
        case ADD_STAFFRATE_SUCCESS:

            return { loading: false, rate: action.payload }

        case LOAD_RATE_FAIL:
        case ADD_STAFFRATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export const invoice = (state = { invoice: {} }, action) => {
    switch (action.type) {
        case GET_CLIENT_INVOICE_REQUEST:
                 case GET_INVOICE_REQUEST:
            case GENERATE_INVOICE_REQUEST:
            case GENERATE_CLIENT_INVOICE_REQUEST:
            return { loading: true }
        case GET_CLIENT_INVOICE_SUCCESS:
        case GENERATE_CLIENT_INVOICE_SUCCESS:
                case GET_INVOICE_SUCCESS:
            case GENERATE_INVOICE_SUCCESS:
            return { loading: false, invoice: action.payload }
        case GET_CLIENT_INVOICE_FAIL:
              case GET_INVOICE_FAIL:
            case GENERATE_INVOICE_FAIL:
            case GENERATE_CLIENT_INVOICE_FAIL:
               return {
                loading: false,
                error: action.payload
            }
           default:
            return state
    }
}

export const Event = (state = { event: [] }, action) => {
    switch (action.type) {
        case LOAD_EVENT_REQUEST:
        case ADD_EVENT_REQUEST:
            case GET_FILTER_REQUEST:
        case EDIT_EVENT_REQUEST:
        case UPDATE_ISADMINAPPROVAL_REQUEST:
        case UPDATE_ADMINSTATUS_REQUEST:
           
            case GET_COMPLETED_REQUEST:
            return { loading: true }
        case LOAD_EVENT_SUCCESS:
        case ADD_EVENT_SUCCESS:
            
            case GET_FILTER_SUCCESS:
        case EDIT_EVENT_SUCCESS:
        case UPDATE_ISADMINAPPROVAL_SUCCESS:
        case UPDATE_ADMINSTATUS_SUCCESS:
        case GET_COMPLETED_SUCCESS:
            return { loading: false, event: action.payload }
        case LOAD_EVENT_FAIL:
            case GET_FILTER_FAIL:
        case ADD_EVENT_FAIL:
      
        case EDIT_EVENT_FAIL:
        case GET_COMPLETED_FAIL:
        case UPDATE_ISADMINAPPROVAL_FAIL:
        case UPDATE_ADMINSTATUS_FAIL:
            
            return {
                loading: false,
                error: action.payload
            }
            case 'UPDATE_EVENT':
                return { ...state }
              case 'UPDATE_FILTERS':
                // ** Updates Filters based on action filter
                const filterIndex = state.selectedCalendars.findIndex(i => i === action.filter)
                if (state.selectedCalendars.includes(action.filter)) {
                  state.selectedCalendars.splice(filterIndex, 1)
                } else {
                  state.selectedCalendars.push(action.filter)
                }
                if (state.selectedCalendars.length === 0) {
                  state.events.length = 0
                }
                return { ...state }
              case 'UPDATE_ALL_FILTERS':
                // ** Updates All Filters based on action value
                const value = action.value
                let selected = []
                if (value === true) {
                  selected = ['Unassigned', 'Assigned']
                } else {
                  selected = []
                }
                return { ...state, selectedCalendars: selected }
              case 'SELECT_EVENT':
                return { ...state, selectedEvent: action.event }
        default:
            return state
    }
}

export const Employee = (state = { employee: [] }, action) => {
    switch (action.type) {
        case LOAD_EMPLOYEE_REQUEST:
        case ADD_EMPLOYEE_REQUEST:
            return { loading: true }
        case LOAD_EMPLOYEE_SUCCESS:
        case ADD_EMPLOYEE_SUCCESS:
            return { loading: false, employee: action.payload }
        case LOAD_EMPLOYEE_FAIL:
        case ADD_EMPLOYEE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default authReducer