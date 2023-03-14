// ** React Imports
import { Link, useHistory } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'
import { Briefcase } from 'react-feather'

// ** Third Party Components
import { Card, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import Group from '@src/assets/images/svg/Group 15.svg'
import Image from '@src/assets/images/svg/Group 16.svg'
import { ClientDelete } from '../../../../redux1/action/auth'
import { useDispatch } from 'react-redux'

const UserInfoCard = ({ data }) => {
  const dispatch = useDispatch()
    const history = useHistory()
  // ** render user img
  const handelDelete = (id) => {
    dispatch(ClientDelete({ id }))
   history.push("/apps/clients/list")
  }
const renderUserImg = () => {
    if (data !== null) {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      
      return (
        <Briefcase
          initials
          color='#7367f0'
             contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(36px)',
            width: '100%',
            height: '100%'
          }}
             style={{
            height: '86px',
            width: '82px',
            marginLeft: '90px',
            marginRight:'100px'
          }}
         
        />
      )
    }
  }

  return (
    <Card style={{ marginLeft:'20px'}}>
      <CardBody>
        <Row>
         <Col >
         
            <div className='user-avatar-section'>
            <div className='text-center' style={{ marginTop:'50px' }}>
           {renderUserImg()}
            <p className='mx-2 my-0'><b>{data?.name}</b></p><br/>
            </div>
              <div className='conatiner-fluid'>
                
                <h4>Details</h4>
                <hr/>
                <div className='details'>
                  <p>Name: {data?.name}</p>
                  <p>Billing Email: {data?.email}</p>
                  <p>Department: {data?.department}</p>
                  <p>Contact: {data?.contact}</p>
                  <p>Address: {data?.address}</p>
                </div>
                <div className='d-flex flex-wrap align-items-center'>
                    <Button.Ripple tag={Link} to={`/apps/user/edit/${data?.uuid}`} color='primary'>
                      Edit
                    </Button.Ripple>
                  <Button.Ripple className='ml-1' color='danger' onClick={() => { handelDelete(data?.uuid) } } outline>
                      Delete
                    </Button.Ripple>
                  </div>
              </div>
            </div>
            </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default UserInfoCard
