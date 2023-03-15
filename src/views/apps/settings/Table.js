
// ** React Imports
import { Fragment, useState, useEffect, useRef  } from 'react'


import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import { ChevronDown, CheckSquare } from 'react-feather'
import DataTable from 'react-data-table-component'
import { selectThemeColors } from '@utils'
import { Card, CardHeader, CardTitle, CardBody, Input, Row, Col, Label, CustomInput, Button } from 'reactstrap'
import ModalDialog from './ModalDialog'
// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { loadEmploee, updateAdminStatus } from '../../../redux1/action/auth'

// ** Table Header
const CustomHeader = ({ toggleSidebar }) => {
  return (
    <div className='invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75'>
      <Row>
        <Col xl='6' className='d-flex align-items-center p-0'>
      
        </Col>
        <Col
          xl='6'
          className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'
        >
         <ModalDialog/>
         
        </Col>
      </Row>
    </div>
  )
}

const Table  = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  
  const checkpage = useRef()
  
  // ** States
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [searchTerm, setSearchTerm] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  
  console.log(currentPage)
  // ** Function to toggle sidebar
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  
  // ** Get data on mount

    useEffect(() => {
        dispatch(loadEmploee())
    }, [dispatch])

    const data = useSelector(state => state.Employee.employee)
    const handleChange = ({ uuid, active }) => {
        dispatch(updateAdminStatus(uuid, { active: !active }))
    }

  
  // ** Function in get data on search query change
  const columns = [
    {
        name: 'Name',
        selector: 'name'
    },
    {
        name: 'Email',
        selector: 'email'
    },
    {
        name: 'Status',
        selector: ({ active, uuid }) => (
            <CheckSquare
                size={18}
                style={{ color: active ? 'green' : 'red' }}
                onClick={() => handleChange({ uuid, active })}
                className='cursor-pointer'
            />
        )
    }
]


  const CustomPagination = () => {
  
     const count = Number(Math.ceil(data?.Employee?.employee.totalPage))
     

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

  // ** Table data to render
  const dataToRender = () => {
    if (data?.length > 0) {
      return data
    } else if (data?.length === 0) {
      return []
    } 
  }

  return (
    <Fragment>

      <Card>
        <DataTable
         title='Employee list'
          pagination
          subHeader
          responsive
          columns={columns}
          className='react-dataTable'
          paginationComponentOptions={paginationComponentOptions}
          data={data}
          subHeaderComponent={
            <CustomHeader
              toggleSidebar={toggleSidebar}
             
            />
          }
        />
      </Card>

    
    </Fragment>
  )
  
}

export default Table 
