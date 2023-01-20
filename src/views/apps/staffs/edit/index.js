import React, { useEffect } from 'react'
import { Card, CardBody, Media, Row, Col, Button, Form, Input, Label, FormGroup, Table, CardHeader } from 'reactstrap'
import classnames from 'classnames'
import { isObjEmpty } from '@utils'
import { useForm } from 'react-hook-form'
import { editClient } from '../../../../redux1/action/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

const index = () => {
  const { register, errors, handleSubmit } = useForm()
  const dispatch = useDispatch()
    const history = useHistory()

 const { id } = useParams()
  const onSubmit = values => {
    if (isObjEmpty(errors)) {
      dispatch(
        editClient({
          id,
          name: values.names,
          address: values.country,
          contact: values.contact,
          email: values.email,
          department: values.department
        })
      )
    }

  } 

   
  const datas = useSelector(state => state.Clients)
const data = (datas?.client)
   
      useEffect(() => {
   if (data?.success) {
    history.push("/apps/staffs/list")
   }
  }, [data])
  return (
    <>
    <Card>
     <CardBody>
     <CardHeader>
      <h4>Edit Page</h4>
     </CardHeader>
     <Row>
      
      <Col sm='12'>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='name'>Name</Label>
                    
                      <Input type='text'
                        id='name'
                        placeholder='Name'
                        name='names'
                        innerRef={register()}
                        className={classnames({ 'is-invalid': errors['name'] })}
                      />
              </FormGroup>
            </Col>
                  <Col md='4' sm='12'>
                    
              <FormGroup>
                <Label for='email'>Email</Label>
                      <Input type='email' id='email' placeholder='Email'
                       name='email'
                        innerRef={register()}
                        className={classnames({ 'is-invalid': errors['email'] })}
                      />
              </FormGroup>
            </Col>
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='address'>Address</Label>
                      <Input type='text' id='address' placeholder='Address'
                       name='address'
                        innerRef={register()}
                        className={classnames({ 'is-invalid': errors['address'] })}
                      />
              </FormGroup>
            </Col>
           
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='contact'>Contact</Label>
                      <Input type='number' id='contact' placeholder='Contact'
                       name='contact'
                        innerRef={register()}
                        className={classnames({ 'is-invalid': errors['contact'] })}
                      />
              </FormGroup>
            </Col>
           
            <Col md='4' sm='12'>
              <FormGroup>
                <Label for='department'>Department</Label>
                      <Input type='text' id='department' placeholder='Department'
                       name='department'
                        innerRef={register()}
                        className={classnames({ 'is-invalid': errors['department'] })}
                      />
              </FormGroup>
            </Col>
            

            <Col className='d-flex flex-sm-row flex-column mt-2' sm='12'>
              <Button.Ripple className='mb-1 mb-sm-0 mr-0 mr-sm-1' type='submit' color='primary'>
                Save Changes
              </Button.Ripple>
              <Button.Ripple type='reset' color='secondary' outline>
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
