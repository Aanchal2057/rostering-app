// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { getUser, deleteUser } from '../store/action'
import { store } from '@store/storeConfig/store'

// ** Third Party Components
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Slack, User, Settings, Database, Edit2, MoreVertical, FileText, Trash2, Archive, CheckSquare } from 'react-feather'
import { useSelector } from 'react-redux'

export const columns = [
  {
    name: 'User',
    minWidth: '297px',
    selector: 'fullName',
    sortable: true,
    cell: row => (
      <div className='d-flex justify-content-left align-items-center'>
        {/* {renderClient(row)} */}
        <div className='d-flex flex-column'>
          <Link
            to={`/apps/user/view/${row.uuid}`}
            className='user-name text-truncate mb-0'
            // onClick={() => store.dispatch(getUser(row.id))}
          >
            <span className='font-weight-bold'>{row.name}</span>
          </Link>
        </div>
      </div>
    )
  },
  {
    name: 'Email',
    minWidth: '320px',
    selector: 'email',
    sortable: true,
    cell: row => row.email
  },
  {
    name: 'Address',
    minWidth: '172px',
    selector: 'address',
    sortable: true,
    cell: row => row.address
  },
  {
    name: 'Contact',
    minWidth: '138px',
    selector: 'currentPlan',
    sortable: true,
    cell: row => row.contact
  },
  {
    name: 'Department',
    minWidth: '138px',
    selector: 'status',
    sortable: true,
    cell: row => row.department

  },
  {
    name: 'Actions',
    minWidth: '100px',
    cell: row => (
      <UncontrolledDropdown>
        <DropdownToggle tag='div' className='btn btn-sm'>
        <MoreVertical size={14} className='cursor-pointer' color = '#7367f0'/>
          <CheckSquare size={14} className='cursor-pointer'   color = '#7367f0'/>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem
            tag={Link}
            to={`/apps/user/view/${row.uuid}`}
            className='w-100'
            // onClick={() => store.dispatch(getUser(row.id))}
          >
            <FileText size={14} className='mr-50' />
            <span className='align-middle'>Details</span>
          </DropdownItem>
          <DropdownItem
            tag={Link}
            to={`/apps/user/edit/${row.uuid}`}
            className='w-100'
            // onClick={() => store.dispatch(getUser(row.id))}
          >
            <Archive size={14} className='mr-50' />
            <span className='align-middle'>Edit</span>
          </DropdownItem>
          {/* <DropdownItem className='w-100' onClick={() => store.dispatch(deleteUser(row.id))}>
            <Trash2 size={14} className='mr-50' />
            <span className='align-middle'>Delete</span>
          </DropdownItem> */}
        </DropdownMenu>
      </UncontrolledDropdown>

    )
  }
]
