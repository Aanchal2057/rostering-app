// ** React Import
import { useState, useEffect } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils
import { isObjEmpty } from '@utils'

import { useHistory } from 'react-router-dom'
// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'

// ** Store & Actions
import { addUser } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'
import { Staffs, addStaffs } from '../../../../redux1/action/auth'

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const [role, setRole] = useState('subscriber')
  const [plan, setPlan] = useState('basic')

  // ** Store Vars
  const dispatch = useDispatch()
    const history = useHistory()

  // ** Vars
  const { register, errors, handleSubmit } = useForm()

  // ** Function to handle form submit
  const onSubmit = values => {
    if (isObjEmpty(errors)) {
      toggleSidebar()
      dispatch(
        addStaffs({
          name: values['full-name'],
          address: values.country,
          contact: values.contact,
          email: values.email,
          department: values.department
        })
      )
    }
 
   
  }

  const datas = useSelector(state => state.Staffs)
const data = (datas?.staffs)

  useEffect(() => {
   if (data?.success) {
    dispatch(Staffs(1))
    history.push("/apps/staffs/list")
   }
  }, [dispatch, data])

  return (
    <Sidebar
      size='lg'
      open={open}
      title='New User'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for='full-name'>
            Full Name <span className='text-danger'>*</span>
          </Label>
          <Input
            name='full-name'
            id='full-name'
            placeholder='Name'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['full-name'] })}
          />
        </FormGroup>
        <FormGroup>
        <Label for='full-name'>
            Email <span className='text-danger'>*</span>
          </Label>
          <Input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['email'] })}
          />
          <FormText color='muted'>You can use letters, numbers & periods</FormText>
        </FormGroup>
        {/* <FormGroup>
          <Label for='company'>
            Company <span className='text-danger'>*</span>
          </Label>
          <Input
            name='company'
            id='company'
            placeholder='Company Pvt Ltd'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['company'] })}
          />
        </FormGroup> */}
        <FormGroup>
          <Label for='country'>
            Address <span className='text-danger'>*</span>
          </Label>
          <Input
            name='country'
            id='country'
            placeholder='Mechinagar -8, Jhapa'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['country'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='contact'>
            Contact <span className='text-danger'>*</span>
          </Label>
          <Input
            type='number'
            name='contact'
            id='contact'
            placeholder='(397) 294-5153'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['contact'] })}
          />
        </FormGroup>
         <FormGroup>
          <Label for='department'>
            Departmnet<span className='text-danger'>*</span>
          </Label>
          <Input
            name='department'
            id='department'
            placeholder='Department'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['department'] })}
          />
        </FormGroup>
       
        <Button type='submit' className='mr-1' color='primary'>
          Submit
        </Button>
        <Button type='reset' color='secondary' outline onClick={toggleSidebar}>
          Cancel
        </Button>
      </Form>
    </Sidebar>
  )
}

export default SidebarNewUsers
