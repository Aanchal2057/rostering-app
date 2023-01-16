// ** React Import
import { useState } from 'react'

// ** Custom Components
import Sidebar from '@components/sidebar'

// ** Utils
import { isObjEmpty } from '@utils'

// ** Third Party Components
import classnames from 'classnames'
import { useForm } from 'react-hook-form'
import { Button, FormGroup, Label, FormText, Form, Input } from 'reactstrap'

// ** Store & Actions
import { addUser } from '../store/action'
import { useDispatch } from 'react-redux'

const SidebarNewUsers = ({ open, toggleSidebar }) => {
  // ** States
  const [role, setRole] = useState('subscriber')
  const [plan, setPlan] = useState('basic')

  // ** Store Vars
  const dispatch = useDispatch()

  // ** Vars
  const { register, errors, handleSubmit } = useForm()

  // ** Function to handle form submit
  const onSubmit = values => {
    if (isObjEmpty(errors)) {
      toggleSidebar()
      dispatch(
        addUser({
          fullName: values['full-name'],
          company: values.company,
          role,
          username: values.username,
          country: values.country,
          contact: values.contact,
          email: values.email,
          currentPlan: plan,
          status: 'active',
          avatar: ''
        })
      )
    }
  }

  return (
    <Sidebar
      size='lg'
      open={open}
      title='New Staffs'
      headerClassName='mb-1'
      contentClassName='pt-0'
      toggleSidebar={toggleSidebar}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for='full-name'>
            Name <span className='text-danger'>*</span>
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
       
        <FormGroup>
          <Label for='country'>
            Address <span className='text-danger'>*</span>
          </Label>
          <Input
            name='country'
            id='country'
            placeholder='Address'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['country'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='contact'>
            Contact <span className='text-danger'>*</span>
          </Label>
          <Input
            name='contact'
            id='contact'
            placeholder='Contact'
            innerRef={register({ required: true })}
            className={classnames({ 'is-invalid': errors['contact'] })}
          />
        </FormGroup>
        <FormGroup>
          <Label for='department'>
            Department <span className='text-danger'>*</span>
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
