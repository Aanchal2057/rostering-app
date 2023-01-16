// ** React Imports
import { Fragment, useState, useEffect, useRef  } from 'react'

// ** Invoice List Sidebar
import Sidebar from './Sidebar'

// ** Columns
import { columns } from './columns'

// ** Store & Actions
import { getAllData, getData } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'

// ** Third Party Components
import Select from 'react-select'
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'
import { selectThemeColors } from '@utils'
import { Card, CardHeader, CardTitle, CardBody, Input, Row, Col, Label, CustomInput, Button } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { Clients } from '../../../../redux1/action/auth'

// ** Table Header
const CustomHeader = ({ toggleSidebar, handleFilter, searchTerm }) => {
  return (
    <div className='invoice-list-table-header w-100 mr-1 ml-50 mt-2 mb-75'>
      <Row>
        <Col xl='6' className='d-flex align-items-center p-0'>
        </Col>
        <Col
          xl='6'
          className='d-flex align-items-sm-center justify-content-lg-end justify-content-start flex-lg-nowrap flex-wrap flex-sm-row flex-column pr-lg-1 p-0 mt-lg-0 mt-1'
        >
         
          <Button.Ripple color='primary' onClick={toggleSidebar}>
            Add New Staffs
          </Button.Ripple>
        </Col>
      </Row>
    </div>
  )
}

const UsersList = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  
  const store = useSelector(state => state.users)

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
    
    dispatch(Clients({currentPage}))
   
  }, [dispatch, currentPage])
  
  const data = useSelector(state => state.Clients)
  const datas = (data.client?.clients)
  // ** Function in get data on page change
  const handlePagination = (page) => {

    setCurrentPage((page.selected + checkpage.current.handlePageSelected.length) - 1)


  }
  // ** Function in get data on search query change

  const CustomPagination = () => {
   
    const count = Number(Math.ceil(data?.client?.totalPage))

    return (
      <ReactPaginate
        ref={checkpage}
        previousLabel={''}
        nextLabel={''}
        pageCount={count || 1}
        activeClassName='active'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
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

  // ** Table data to render
  const dataToRender = () => {
    if (datas?.length > 0) {
      return datas
    } else if (datas?.length === 0) {
      return []
    } 
  }

  return (
    <Fragment>

      <Card>
        <DataTable
          noHeader
          pagination
          subHeader
          responsive
          paginationServer
          columns={columns}
          sortIcon={<ChevronDown />}
          className='react-dataTable'
          paginationComponent={CustomPagination}
          data={ dataToRender()}
          subHeaderComponent={
            <CustomHeader
              toggleSidebar={toggleSidebar}
             
            />
          }
        />
      </Card>

      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
    </Fragment>
  )
}

export default UsersList
