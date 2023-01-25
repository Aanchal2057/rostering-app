// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
// import auth from './auth'
import authReducer, {Clients, Staffs, rate} from '../../redux1/reducer/authReducer' 
import navbar from './navbar'
import layout from './layout'
import users from '@src/views/apps/user/store/reducer'
import invoice from '@src/views/apps/invoice/store/reducer'
import calendar from '@src/views/apps/calendar/store/reducer'
import dataTables from '@src/views/tables/data-tables/store/reducer'

const rootReducer = combineReducers({
  authReducer,
  Clients,
  Staffs,
  users,
  navbar,
  layout,
  invoice,
  calendar,
  rate,
  dataTables
})

export default rootReducer
