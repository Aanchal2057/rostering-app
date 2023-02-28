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
    // const user = alluser?.find(user => user.name === ) 
   
    const columns = [
        {
            name: 'NAME',
            
            selector: row => row.title
        },
        {
            name: 'START DATE',
            selector: row => row.start_date
        },
        {
            name: 'END DATE',
            selector: row => row.end_date

        },
        {
            name: 'CLIENT',
            selector: row => row.client?.name
            

        },
        {
            name: 'STAFF',
            selector: row => row.staff_id
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
    // const data = [
    //     {
    //         id: 1,
    //         title: 'Beetlejuice',
    //         year: '1988'
    //     },
    //     {
    //         id: 2,
    //         title: 'Ghostbusters',
    //         year: '1984'
    //     }
    //]
    
    return (
        <div>
           
            <DataTable
            title="Upcomming Schedule List"
                pagination
                columns={columns}
                data={displaydata}
                responsive
                selectableRows
                selectableRowsHighlight
                paginationServer
                className='react-dataTable'
            />
        </div>
    )
}

export default index
