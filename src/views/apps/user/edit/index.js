import React from 'react'
import {  Card, CardBody, Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CardHeader } from 'reactstrap'


const index = () => {
  return (
    <>
    <Card>
     <CardBody>
     <CardHeader>
      <h4>Edit Page</h4>
     </CardHeader>
     <Row>
      
      <Col sm='12'>
        <Form>
          <Row>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='name'>Name</Label>
                <Input type='text' id='name' placeholder='Name'/>
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='email'>Email</Label>
                <Input type='text' id='email' placeholder='Email'/>
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='address'>Address</Label>
                <Input type='text' id='address' placeholder='Address'/>
              </FormGroup>
            </Col>
           
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='contact'>Contact</Label>
                <Input type='text' id='contact' placeholder='Contact'/>
              </FormGroup>
            </Col>
           
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='department'>Department</Label>
                <Input type='text' id='department' placeholder='Department'/>
              </FormGroup>
            </Col>
            

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                Save Changes
              </Button.Ripple>
              <Button.Ripple color='secondary' outline>
                Reset
              </Button.Ripple>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
     </CardBody>
    </Card>
    </>
  )
}

export default index
