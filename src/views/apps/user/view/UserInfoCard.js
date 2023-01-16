// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Card, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import { DollarSign, TrendingUp, User, Check, Star, Flag, Phone } from 'react-feather'
import Group from '@src/assets/images/svg/Group 15.svg'
import Image from '@src/assets/images/svg/Group 16.svg'
const UserInfoCard = ({ data }) => {
  // ** render user img

const renderUserImg = () => {
    if (data !== null) {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded'
          content={data?.name}
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
    <Card style={{ width:"380px", marginLeft:'16px'}}>
      <CardBody>
        <Row>
         <Col >
          {/* <Col xl='12' lg='12' className='d-flex flex-column justify-content-between align-items-center border-container-lg' style={{ height: '800px' }}> */}
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
                    <Button.Ripple className='ml-1' color='danger' outline>
                      Suspended
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
