// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Card, CardBody, CardText, Button, Row, Col } from 'reactstrap'
import { DollarSign, TrendingUp, User, Check, Star, Flag, Phone } from 'react-feather'
import Group from '@src/assets/images/svg/Group 15.svg'
import Image from '@src/assets/images/svg/Group 16.svg'
const UserInfoCard = ({ selectedUser }) => {
  // ** render user img
  const renderUserImg = () => {
    if (selectedUser !== null && selectedUser.avatar.length) {
      return <img src={selectedUser.avatar} alt='user-avatar' className='img-fluid rounded m-2' style={{ margin: 'auto' }} height='104' width='104' />
    } else {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded'
          content={selectedUser.fullName}
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
         <Col style={{ height: '775px' }}>
          {/* <Col xl='12' lg='12' className='d-flex flex-column justify-content-between align-items-center border-container-lg' style={{ height: '800px' }}> */}
            <div className='user-avatar-section'>
            <div className='text-center' style={{ marginTop:'50px' }}>
            {renderUserImg()}
            <p className='mx-2 my-0'>Hell</p><br/>
            <p className='mx-2 my-0'>Hell</p><br/>
            </div>
              <div className='conatiner-fluid'>
                  <div className="row" style={{ marginTop:'-50px', marginLeft:'10px'}}>
                    <div className="col" style={{ marginLeft: "14px" }}>
                     <div>
                     <img className='fallback-logo' src={Group} alt='icon' />
                     <p style={{ marginTop:'110px', marginLeft:'30px'}}>sgh</p>
                     <p style={{marginLeft:'30px'}}>js</p>
                     </div>
                    </div>
                    <div className="col">
                    <img className='fallback-logo' src={Image} alt='icon' />
                    <p style={{ marginTop:'110px', marginLeft:'30px'}}>sgh</p>
                    <p style={{marginLeft:'30px'}}>js</p>
                  </div>

                </div>
                <h4>Details</h4>
                <hr/>
                <div className='details'>
                  <p>Name:<b/></p>
                  <p>Billing Email:</p>
                  <p>Status:</p>
                  <p>Department:</p>
                  <p>Contact:</p>
                  <p>Address:</p>
                </div>
                <div className='d-flex flex-wrap align-items-center'>
                    <Button.Ripple tag={Link} to={`/apps/user/edit/${selectedUser.id}`} color='primary'>
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
