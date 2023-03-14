// ** React Imports
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// ** Table Columns
import { columns, column, columnscompleted } from './columns'
import datas from '../../../../@fake-db/fake_data/data_invoice.json'
import datas_completed from '../../../../@fake-db/fake_data/data_completed.json'
// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown, Columns } from 'react-feather'
import DataTable from 'react-data-table-component'
import { Button, Label, Input, CustomInput, Row, Col, Card } from 'reactstrap'

// ** Store & Actions
import { getData } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'

// ** Styles
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { log } from '@craco/craco/lib/logger'

const CustomHeader = ({clickValue, show, handleFilter, value, handleStatusValue, statusValue, handlePerPage, rowsPerPage }) => {
  console.log(datas)

  const shoot = () => {
    alert("Great Shot!")
  }
  
  return (
    <>
      <div className='invoice-list-table-header w-100 py-2 bg-light'>
      <Row>
        <Col lg='6' className='d-flex align-items-center px-0 px-lg-1'>
      
          <Button  className='mx-2 cursor-pointer' onClick={ () => { show('upcoming') } } color='primary'>
           Upcoming
          </Button>
          <Button tag={Link} className='mx-2' onClick={ () => { show('completed') } } color='primary'>
           Completed
          </Button>
          <Button tag={Link} onClick={ () => { show('invoice') } } className='mx-2'  color='primary'>
           Invoices
          </Button>
        </Col>
      </Row>
    </div>
    <div className='invoice-list-table-header w-100 py-2 bg-white'>
      <Row>
        <Col lg='6' className='d-flex align-items-center px-0 px-lg-1'>
          {/* <h2>Upcoming<b/></h2> */}
        </Col>
      </Row>
    </div>
    </>
    
  )
}

const InvoiceList = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.invoice)

  const [value, setValue] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [statusValue, setStatusValue] = useState('')
  const [upComming, setUpComming] = useState(true)
  const [completed, setCompleted] = useState(false)
  const [invoice, setInvoice] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(10)

// const clickValue = (val) => {
//   if (val === 'upComming') {
//     setUpComming(true)
//     setCompleted(false)
//     setInvoice(false)
//     console.log(val)
//   }
// }

const display = () => {
 if (upComming) {
  return columns
 } else if (completed) {
  return columnscompleted
 } else if (invoice) {
  return column
 }
}

  useEffect(() => {
  
      dispatch(
        getData({
          page: currentPage,
          perPage: rowsPerPage,
          status: statusValue,
          q: value
        })
      )
    
   
  }, [dispatch, store.data.length])

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

  const handleFilter = val => {
    setValue(val)
    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
        status: statusValue,
        q: val
      })
    )
  }

  const handlePerPage = e => {
    dispatch(
      getData({
        page: currentPage,
        perPage: parseInt(e.target.value),
        status: statusValue,
        q: value
      })
    )
    setRowsPerPage(parseInt(e.target.value))
  }

  const handleStatusValue = e => {
    setStatusValue(e.target.value)
    dispatch(
      getData({
        page: currentPage,
        perPage: rowsPerPage,
        status: e.target.value,
        q: value
      })
    )
  }

  const handlePagination = page => {
    dispatch(
      getData({
        page: page.selected + 1,
        perPage: rowsPerPage,
        status: statusValue,
        q: value
      })
    )
    setCurrentPage(page.selected + 1)
  }

  const CustomPagination = () => {
    const count = Number((store.total / rowsPerPage).toFixed(0))

    return (
      <ReactPaginate
        pageCount={count || 1}
        nextLabel=''
        breakLabel='...'
        previousLabel=''
        activeClassName='active'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        forcePage={currentPage !== 0 ? currentPage - 1 : 0}
        onPageChange={page => handlePagination(page)}
        pageClassName={'page-item'}
        nextLinkClassName={'page-link'}
        nextClassName={'page-item next'}
        previousClassName={'page-item prev'}
        previousLinkClassName={'page-link'}
        pageLinkClassName={'page-link'}
        containerClassName={'pagination react-paginate justify-content-end p-1'}
      />
    )
  }

  const dataToRender = () => {
    if (upComming) {
      const filters = {
        status: statusValue,
        q: value
      }
  
      const isFiltered = Object.keys(filters).some(function (k) {
        return filters[k].length > 0
      })
  
      if (store.data.length > 0) {
        return store.data
      } else if (store.data.length === 0 && isFiltered) {
        return []
      } else {
        return store.allData.slice(0, rowsPerPage)
      }
    } else if (completed) {
      const filters = {
        q: datas_completed
      }
  
      const isFiltered = Object.keys(filters).some(function (k) {
        return filters[k].length > 0
      })
  
      if (datas_completed.length > 0) {
        return datas
      } else if (datas_completed.length === 0 && isFiltered) {
        return []
      } else {
        return datas_completed.slice(0, rowsPerPage)
      }
    } else if (invoice) {
      const filters = {
        q: datas
      }
  
      const isFiltered = Object.keys(filters).some(function (k) {
        return filters[k].length > 0
      })
  
      if (datas.length > 0) {
        return datas
      } else if (datas.length === 0 && isFiltered) {
        return []
      } else {
        return datas.slice(0, rowsPerPage)
      }
    }
  }
  return (
    <div className='invoice-list-wrapper'>
      <Card style={{ width:"1298px" }}>
        <div className='invoice-list-dataTable'>
          <DataTable
            title="Client"
            // noHeader
            pagination
            paginationServer
            subHeader={true}
            columns={display()}
            responsive={true}
            sortIcon={<ChevronDown />}
            className='react-dataTable'
            defaultSortField='invoiceId'
            paginationDefaultPage={currentPage}
            paginationComponent={CustomPagination}
            data={dataToRender()}
            subHeaderComponent={
              <CustomHeader
                value={value}
                show={show}
                statusValue={statusValue}
                rowsPerPage={rowsPerPage}
                handleFilter={handleFilter}
                handlePerPage={handlePerPage}
                handleStatusValue={handleStatusValue}
              />
            }
          />
        </div>
      </Card>
    </div>
  )
}

export default InvoiceList
