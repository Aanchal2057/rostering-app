// ** Router Import
import { useSelector } from 'react-redux'
import Router from './router/Router'
import { useEffect } from 'react'
import {store} from '../src/redux/storeConfig/store'
import { isAuth } from './redux1/action/auth'

const App = props => {
      const {isAuthenticated} = useSelector(
(state) => state.authReducer
    )
    
useEffect(() => {
store.dispatch(isAuth())
}, [])

    return <Router isAuthenticated={isAuthenticated} />
}

export default App
