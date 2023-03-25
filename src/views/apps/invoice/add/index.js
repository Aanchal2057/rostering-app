// ** Invoice Add Components
import AddCard from './AddCard'
import AddActions from './AddActions'

// ** Third Party Components
import { Row, Col } from 'reactstrap'

// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/base/pages/app-invoice.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { generateInvoice } from '../../../../redux1/action/auth'

const InvoiceAdd = () => {
  const dispatch = useDispatch()

  const data = useSelector(state => state?.invoice?.invoice)

  const uuid = data?.invoices && data?.invoices[0]?.uuid

  useEffect(() => {   
     dispatch(generateInvoice(uuid))
  }, [dispatch])

  console.log(uuid)
  return (
    <div className='invoice-add-wrapper'>
      <Row className='invoice-add'>
        <Col xl={9} md={8} sm={12}>
    {!data?.invoices ? 'no invoice to display' : <AddCard /> }
        </Col>
        <Col xl={3} md={4} sm={12}>
  
        </Col>
      </Row>
    </div>
  )
}

export default InvoiceAdd
