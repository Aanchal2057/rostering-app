// ** User List Component
import { useEffect } from 'react'
import Table from './Table'

// ** Styles
import '@styles/react/apps/app-users.scss'
import { Clients } from '../../../../redux1/action/auth'
import { useDispatch, useSelector } from 'react-redux'

const UsersList = () => {

  return (
    <div className='app-user-list'>
    
      <Table  />
    </div>
  )
}
export  const ClientsList = () => {
  return (
    <div className='app-user-list'>
      <Table />
    </div>
  )
}

export default UsersList
