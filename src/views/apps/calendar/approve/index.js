import {useEffect, useState} from 'react'
import DataTable from 'react-data-table-component'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { loadEvent } from '../../../../redux1/action/auth'
import { CheckSquare } from 'react-feather'
const index = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadEvent())
    }, [dispatch])
    const data = useSelector(state => state?.Event?.event)
    console.log(data)
   
    const [iconStatus, setIconStatus] = useState([])
      
      const isAdminApprovals = useSelector(state => state?.Event?.event?.map(event => ({
        status: event.isAdminApproval
       })))

      
      // setIconStatus(isAdminApprovals)
     console.log(isAdminApprovals)
   
      
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
        },
        {
            name:'ADMIN APPROVAL',
            minWidth:'100px',
<<<<<<< HEAD
            selector:  row => (<CheckSquare size={18}  style={{ color: iconStatus ? 'green' : 'red' }}   className='cursor-pointer'  />)
=======
            selector:  row => (<CheckSquare size={18}  style={{ color: isAdminApprovals ? 'green' : 'red' }}   className='cursor-pointer'  />)
>>>>>>> parent of 6aaad37 (error approve)
        }
    ]
    const paginationComponentOptions = {
        selectAllRowsItem: true,
        selectAllRowsItemText: "ALL"
      }

      
    return (
        <div>
           <DataTable
            title="Approve Tasks"
                pagination
                columns={columns}
                data={data}
                responsive
                selectableRows
                selectableRowsHighlight
                paginationComponentOptions={paginationComponentOptions}
                className='react-dataTable'
            />
        </div>
    )
}

export default index
