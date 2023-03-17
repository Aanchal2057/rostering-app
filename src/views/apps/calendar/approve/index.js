import {useEffect, useState} from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import { loadEvent, updateAdminApproval} from '../../../../redux1/action/auth'
import { CheckSquare } from 'react-feather'
const index = () => {
 
    const dispatch = useDispatch()


    // Load data on component mount
    useEffect(() => {
        dispatch(loadEvent())
    }, [dispatch])

    // Get latest data from store
    const data = useSelector(state => state?.Event?.event || [])
    const handleChange = ({ uuid, isAdminApproval }) => {
        dispatch(updateAdminApproval(uuid, { isAdminApproval: !isAdminApproval })).then(() => {
          dispatch(loadEvent())
        })
      }
      
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
            selector: ({ isAdminApproval, uuid }) => (
                <CheckSquare
                    size={18}
                    style={{ color:isAdminApproval ? 'green' : 'red' }}
                    onClick={() => handleChange({ uuid, isAdminApproval })}
                    className='cursor-pointer'
                />
            )
        }
    ]
    const paginationComponentOptions = {
        selectAllRowsItem: true,
        selectAllRowsItemText: "ALL"
      }


    return (
        <div>
        {Array.isArray(data) && data.length > 0 ? (
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
        ) : (
            <div>No data available</div>
            
        )}
    </div>
    )
}

export default index
