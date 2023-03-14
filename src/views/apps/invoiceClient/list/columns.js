// ** React Imports
import { Fragment } from 'react'

import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { deleteInvoice } from '../store/actions'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import {
  Badge,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  UncontrolledTooltip
} from 'reactstrap'
import {
  Eye,
  Send,
  MoreVertical,
  Download,
  Edit,
  Trash,
  Copy,
  CheckCircle,
  Save,
  ArrowDownCircle,
  Info,
  PieChart
} from 'react-feather'

// ** Vars
const invoiceStatusObj = {
  Sent: { color: 'light-secondary', icon: Send },
  Paid: { color: 'light-success', icon: CheckCircle },
  Draft: { color: 'light-primary', icon: Save },
  Downloaded: { color: 'light-info', icon: ArrowDownCircle },
  'Past Due': { color: 'light-danger', icon: Info },
  'Partial Payment': { color: 'light-warning', icon: PieChart }
}

// ** renders client column
const renderClient = row => {
  const stateNum = Math.floor(Math.random() * 6),
    states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
    color = states[stateNum]

 
}

export const columns = [
  {
    name: 'Name',
    minWidth: '350px',
    selector: 'client',
    sortable: true,
    cell: row => {
      const name = row.client ? row.client.name : 'John Doe',
        email = row.client ? row.client.companyEmail : 'johnDoe@email.com'
      return (
        <div className='d-flex justify-content-left align-items-center'>
          {renderClient(row)}
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0'>{name}</h6>
            {/* <small className='text-truncate text-muted mb-0'>{email}</small> */}
          </div>
        </div>
      )
    }
  },
  {
    name: 'Start Date',
    selector: 'total',
    sortable: true,
    minWidth: '150px',
    cell: row => <span>${row.total || 0}</span>
  },
  {
    name: 'End Date',
    selector: 'dueDate',
    sortable: true,
    minWidth: '100px',
    cell: row => row.dueDate
  },
  {
    name: 'Satff',
    minWidth: '100px',
    selector: 'client',
    sortable: true,
    cell: row => {
      const name = row.client ? row.client.name : 'John Doe'
      return (
        <div className='d-flex justify-content-left align-items-center'>
          {renderClient(row)}
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0'>{name}</h6>
            {/* <small className='text-truncate text-muted mb-0'>{email}</small> */}
          </div>
        </div>
      )
    }
  },
 {
  name: 'Staff Payemnt',
    minWidth: '107px',
    selector: 'id',
    cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`#${row.id}`}</Link>
 },
 {
  name: 'Staff Payemnt',
    minWidth: '107px',
    selector: 'id',
    cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`#${row.id}`}</Link>
 }
]

export const columnscompleted = [
  {
    name: 'Name',
    minWidth: '350px',
    selector: 'client',
    sortable: true,
    cell: row => {
      const name = row.client ? row.client.name : 'John Doe',
        email = row.client ? row.client.companyEmail : 'johnDoe@email.com'
      return (
        <div className='d-flex justify-content-left align-items-center'>
          {renderClient(row)}
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0'>{name}</h6>
            {/* <small className='text-truncate text-muted mb-0'>{email}</small> */}
          </div>
        </div>
      )
    }
  },
  {
    name: 'Start Date',
    selector: 'total',
    sortable: true,
    minWidth: '150px',
    cell: row => <span>${row.total || 0}</span>
  },
  {
    name: 'End Date',
    selector: 'dueDate',
    sortable: true,
    minWidth: '100px',
    cell: row => row.dueDate
  },
  {
    name: 'Client',
    selector: 'dueDate',
    sortable: true,
    minWidth: '100px',
    cell: row => row.dueDate
  },
 
 {
  name: 'Staff Payemnt',
    minWidth: '107px',
    selector: 'id',
    cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`#${row.id}`}</Link>
 },
 {
  name: 'client Payemnt',
    minWidth: '107px',
    selector: 'id',
    cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`#${row.id}`}</Link>
 },
 {
  name: 'Approved',
    minWidth: '107px',
    selector: 'id',
    cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`#${row.id}`}</Link>
 }
]

// ** Table columns
export const column = [
  {
    name: 'Name',
    minWidth: '350px',
    selector: 'client',
    sortable: true,
    cell: row => {
      const name = row.client ? row.client.name : 'John Doe'
      return (
        <div className='d-flex justify-content-left align-items-center'>
          {renderClient(row)}
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0'>{name}</h6>
            {/* <small className='text-truncate text-muted mb-0'>{email}</small> */}
          </div>
        </div>
      )
    }
  },
  {
    name: 'total',
    selector: 'total',
    sortable: true,
    minWidth: '150px',
    cell: row => <span>${row.total || 0}</span>
  },
  {
    name: 'invoice_Date',
    selector: 'dueDate',
    sortable: true,
    minWidth: '100px',
    cell: row => row.dueDate
  },
  {
    name: 'status',
    minWidth: '100px',
    selector: 'client',
    sortable: true,
    cell: row => {
      const name = row.client ? row.client.name : 'John Doe'
      return (
        <div className='d-flex justify-content-left align-items-center'>
          {renderClient(row)}
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0'>{name}</h6>
            {/* <small className='text-truncate text-muted mb-0'>{email}</small> */}
          </div>
        </div>
      )
    }
  },
 {
  name: 'action',
    minWidth: '107px',
    selector: 'id',
    cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`#${row.id}`}</Link>
 }
]
