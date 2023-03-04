// ** Router Import
import Router from './router/Router'
import { useEffect } from 'react'
import { ClientsList, admin } from './redux1/action/auth'
import {store} from '../src/redux/storeConfig/store'
import { useSelector } from 'react-redux'

const App = props => {  
    
  useEffect(()  => {
    
    store.dispatch(admin())
    store.dispatch(ClientsList())
    // store.dispatch(Staffs())
  }, [])
  const { isAuth } = useSelector(
    (state) => state.authReducer
  )

    return <Router isAuthenticated={isAuth} />
}

export default App
