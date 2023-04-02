
// ** React Imports
import { Fragment, useState, useEffect, useRef  } from 'react'


import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown, CheckSquare, Eye } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Card, CardHeader, CardTitle, CardBody, Input, Row, Col, Label, CustomInput, Button } from 'reactstrap'

// import { columns, column, columnscompleted } from './columns'
import { Link, useHistory, useParams } from 'react-router-dom'
import { generateInvoice, getStaffInvoice, loadEvent, createInvoice, StaffsDetails} from '../../../../redux1/action/auth'
// ** Table Header
const CustomHeader = ({ show, dataStaff }) => {
  const dispatch = useDispatch()


  const userId = String(dataStaff?.id)

  const CreateInvoice = userId => {
    
      dispatch(
        createInvoice({
          staff_id: userId
        })
      )
  }

  return (
    <>
      <div className='invoice-list-table-header w-100 py-2 bg-light'>
        <Row>
          <Col lg='9' className='d-flex align-items-center px-0 px-lg-1'>
            <Button className='mx-2 cursor-pointer' onClick={() => show('upcoming')} color='primary'>
              Upcoming
            </Button>
            <Button tag={Link} className='mx-2' onClick={() => show('completed')} color='primary'>
              Completed
            </Button>
            <Button tag={Link} onClick={() => show('invoice')} className='mx-2' color='primary'>
              Invoices
            </Button>
          </Col>
          <Col lg='3' className='d-flex align-items-center px-0 px-lg-1'>
            <Button tag={Link} onClick={() => CreateInvoice(userId)} className='mx-2' color='primary'>
              Generate Invoice
            </Button>
          </Col>
        </Row>
      </div>
      <div className='invoice-list-table-header w-100 py-2 bg-white'>
        <Row>
          <Col lg='6' className='d-flex align-items-center px-0 px-lg-1'></Col>
        </Row>
      </div>
    </>
  )
}

const InvoiceList  = ({dataStaff}) => {
  // ** Store Vars
  const dispatch = useDispatch()
  const checkpage = useRef()
   const history = useHistory()
  // ** States
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [searchTerm, setSearchTerm] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  
  // ** Function to toggle sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  
  // ** Get data on mount
  const {staff_id} = useParams()
  
  const handleGenerateInvoice = (uuid) => {
    dispatch(generateInvoice(uuid))
    history.push("/apps/invoiceStaff/add") 
    
  }

  // ** Function in get data on search query change
  const columns = [
    {
        name: 'NAME',
        selector: row => row.title
    },
    {
        name: 'START DATE',
        selector: row => row.start_date.slice(0, 10)
    },
    {
        name: 'END DATE',
        selector: row => row.end_date.slice(0, 10)

    },
    {
        name: 'CLIENT',
        selector: row => row.client?.name
    },
    {
        name: 'STAFF',
        selector: row => (row.staff.length > 0 ? row.staff[0].name : "no name")
    },
    {
        name: 'STAFF PAYMENT',
        selector: row => row.staff_rate
    },
    {
        name: 'CLIENT PAYMENT',
        selector: row => row.client_rate
    }
   
]
const columnscompleted = [
  {
      name: 'NAME1',
      selector: row => row.title
  },
  {
      name: 'START DATE',
      selector: row => row.start_date.slice(0, 10)
  },
  {
      name: 'END DATE',
      selector: row => row.end_date.slice(0, 10)

  },
  {
      name: 'CLIENT',
      selector: row => row.client?.name
  },
  {
      name: 'STAFF',
      selector: row => (row.staff.length > 0 ? row.staff[0].name : "no name")
  },
  {
      name: 'STAFF PAYMENT',
      selector: row => row.staff_rate
  },
  {
      name: 'CLIENT PAYMENT',
      selector: row => row.client_rate
  }
 
]
const column = [
  {
      name: 'NAME',
      selector: row => dataStaff?.name
  },
  {
      name: 'Total',
      selector: row => row?.total
  },
  {
      name: 'Invoice Date',
      selector: row => row?.invoice_start_date

  },
  {
      name: 'status',
      selector: row => { return row?.isPaid ? 'paid' : 'unpaid' }
  },
  {
      name: 'Action',
    selector: row => <Eye color='gray' className='cursor-pointer' onClick={() => { handleGenerateInvoice(row?.uuid) }}/>
  }
 
]
const [value, setValue] = useState('')
const [upComming, setUpComming] = useState(true)
const [completed, setCompleted] = useState(false)
const [invoice, setInvoice] = useState(false)
const display = () => {
  if (upComming) {
   return columns
  } else if (completed) {
   return columnscompleted
  } else if (invoice) {
   return column
  }
  }
  
 const show = (val) => {
  if (val === 'upcoming') {
    setCompleted(false)
    setInvoice(false)
    setUpComming(true)
  } else if (val === 'completed') {
    setCompleted(true)
    setInvoice(false)
    setUpComming(false)
  } else if (val === 'invoice') {
    setCompleted(false)
    setInvoice(true)
    setUpComming(false)
  }
}

  const CustomPagination = () => {
  
     const count = Number(Math.ceil(data?.Event?.event.totalPage))
     

    return (
      <ReactPaginate
        ref={checkpage}
        previousLabel={''}
        nextLabel={''}
        pageCount={count || 1}
        activeClassName='active'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        // onPageChange={page => handlePagination(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={'pagination react-paginate justify-content-end my-2 pr-1'}
      />
    )
  }
      const paginationComponentOptions = {
        selectAllRowsItem: true,
        selectAllRowsItemText: 'ALL'
  }
  
    const datas = useSelector(state => state?.Event?.event) 
    const datass = useSelector(state => state?.invoice?.invoice?.invoices) 
    useEffect(() => {
      if (upComming) {
            setInvoice(false)
      dispatch(loadEvent(staff_id))
      } else if (completed) {
            setInvoice(false)
      dispatch(loadEvent(staff_id))
      } else if (invoice) {
       
        dispatch(getStaffInvoice(dataStaff?.id))
   }
  }, [dispatch, invoice, upComming, completed])
  
let showevent
  const displayEvents = () => {
    if (upComming) {
      
     const userId = String(dataStaff?.id)
     console.log(userId)
  const data = Array.isArray(datas) && datas?.filter((el) => el?.staff_id === userId)
   showevent = Array.isArray(data) && data?.filter((el) => el?.statusUpcomming === true)
return showevent
    } else if (completed) {
       const userId = String(dataStaff?.id)
  const data =  Array.isArray(datas) && datas?.filter((el) => el?.staff_id === userId)
   showevent =  Array.isArray(data) && data?.filter((el) => el?.statusComplete === true)
return showevent
  } else if (invoice) {

showevent = datass
    return showevent
  }
  }

  return (
    <Fragment>

      <Card>
        <DataTable
          title='staff'
          pagination
          subHeader
          responsive
          columns={display()}
          className='react-dataTable'
          paginationComponentOptions={paginationComponentOptions}
          data={displayEvents()}
          subHeaderComponent={
              <CustomHeader
                value={value}
                show={show}
                dataStaff={dataStaff}
              />
            }
        />
      </Card>

    
    </Fragment>
  )
  
}

export default InvoiceList
