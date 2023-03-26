// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
// import auth from './auth'
import authReducer, {Clients, invoice, Staffs, rate, Event, Employee} from '../../redux1/reducer/authReducer' 
import navbar from './navbar'
import layout from './layout'
import users from '@src/views/apps/user/store/reducer'
import calendar from '@src/views/apps/calendar/store/reducer'
import dataTables from '@src/views/tables/data-tables/store/reducer'

const rootReducer = combineReducers({
  authReducer,
  Event,
  Clients,
  Staffs,
  users,
  navbar,
  layout,
  invoice,
  calendar,
  rate,
  Employee,
  dataTables
})

export default rootReducer
