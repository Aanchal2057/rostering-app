import DataTable from 'react-data-table-component'
import { Card } from 'reactstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadEmploee, updateAdminStatus } from '../../../redux1/action/auth'
import { CheckSquare } from 'react-feather'
const Table = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadEmploee())
    }, [dispatch])

    const data = useSelector(state => state.Employee.employee)

    const handleChange = ({ uuid, active }) => {
        dispatch(updateAdminStatus(uuid, { active: !active }))
    }

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

    const paginationComponentOptions = {
        selectAllRowsItem: true,
        selectAllRowsItemText: 'ALL'
    }

    return (
        <Card style={{ marginLeft: '-130px' }}>
          {Array.isArray(data) && data.length > 0 ? (
            <DataTable
                title='Employee List'
                pagination
                columns={columns}
                data={data}
                refetchEvents={() => dispatch(loadEmploee())}
                responsive
                selectableRowsHighlight
                paginationComponentOptions={paginationComponentOptions}
                className='react-dataTable'
            />
               ) : (
            <div>No data available</div>
            
        )}
        </Card>
    )
}

export default Table
