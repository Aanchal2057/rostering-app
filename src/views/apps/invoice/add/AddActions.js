// ** React Imports
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

// ** Third Party Components
import { Card, CardBody, Button, Input, CustomInput, Label } from 'reactstrap'

const AddActions = () => {
  return (
    <Fragment>
      <Card className='invoice-action-wrapper'>
        <CardBody>
          <Button.Ripple color='primary' block className='mb-75' disabled style={{ width:'auto' }}>
           Generate Invoice
          </Button.Ripple>
        </CardBody>
      </Card>
      <div className='mt-2'>
      </div>
    </Fragment>
  )
}

export default AddActions
