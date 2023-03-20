import {useEffect} from 'react'
import DataTable from 'react-data-table-component'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { loadEvent } from '../../../../redux1/action/auth'
const index = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadEvent())
    }, [dispatch])
    const data = useSelector(state => state?.Event?.event)
    console.log(data)
    const displaydata = data?.filter(word => word.statusUpcomming)
   console.log(displaydata)
   
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
    const paginationComponentOptions = {
        selectAllRowsItem: true,
        selectAllRowsItemText: "ALL"
      }

    
    return (
        <div>
           
            <DataTable
            title="Upcomming Schedule List"
                pagination
                columns={columns}
                data={displaydata}
                responsive
                selectableRowsHighlight
                paginationComponentOptions={paginationComponentOptions}
                className='react-dataTable'
            />
        </div>
    )
}

export default index
