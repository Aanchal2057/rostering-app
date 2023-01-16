// ** React Imports
import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

// ** Store & Actions
import { getUser } from '../store/action'
import { useSelector, useDispatch } from 'react-redux'

// ** Reactstrap
import { Row, Col, Alert } from 'reactstrap'

// ** User View Components
import UserInfoCard from './UserInfoCard'
import InvoiceLists from '../../invoice/list'


// ** Styles
import '@styles/react/apps/app-users.scss'
import { ClientDetails } from '../../../../redux1/action/auth'


const UserView = props => {
  // ** Vars
    const dispatch = useDispatch()
 const { id } = useParams()
  // ** Get suer on mount
  useEffect(() => {
    dispatch(ClientDetails({id}))
  }, [dispatch])

   const datas = useSelector(state => state.Clients)
  const data = (datas?.client)
console.log(data)
  return data !== null ? (
    <div className='app-user-view'>
      <Row>
        <Col sm='no-gutters' >
        <UserInfoCard data={data} />
        </Col>
        <Col sm='9' >
          <InvoiceLists/>
          
        </Col>
      </Row>
    </div>
  ) : (
    <Alert color='danger'>
      <h4 className='alert-heading'>User not found</h4>
      <div className='alert-body'>
        User with id: {id} doesn't exist. Check list of all Users: <Link to='/apps/user/list'>Users List</Link>
      </div>
    </Alert>
  )
}
export default UserView
