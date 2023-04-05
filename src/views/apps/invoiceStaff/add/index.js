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

  const data = useSelector(state => state?.invoice?.invoice)
  console.log(data)

  return (
    <div className='invoice-add-wrapper'>
      <Row className='invoice-add'>
        <Col xl={9} md={8} sm={12}>
          {!data?.invoices ? 'no invoice to display' : <AddCard datas={data?.invoices } /> }
        </Col>
        <Col xl={3} md={4} sm={12}>
          <AddActions />
        </Col>
      </Row>
    </div>
  )
}

export default InvoiceAdd
