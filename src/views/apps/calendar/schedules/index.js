import {useEffect} from 'react'
import DataTable from 'react-data-table-component'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { loadEvent } from '../../../../redux1/action/auth'
const index = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.event)
    useEffect(() => {
        dispatch(loadEvent())
    }, [dispatch, ''])
    const data = useSelector(state => state.Event)
    console.log(data)
    const datas = (data.event)
    console.log(datas)
    console.log(datas[0])
    
    // const list = useSelector(state => state.loadEvents)
    // console.log(list)
    // const datas = (list.event?.events)
    // console.log(datas)
    const columns = [
        {
            name: 'NAME',
            selector: row => row.title
        },
        {
            name: 'START DATE',
            selector: row => row.year
        },
        {
            name: 'END DATE'

        },
        {
            name: 'CLIENT'
        },
        {
            name: 'STAFF'
        },
        {
            name: 'STAFF PAYMENT'
        },
        {
            name: 'CLIENT PAYMENT'
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
                data={data}
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
