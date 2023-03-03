import DataTable from 'react-data-table-component'
import { Card } from 'reactstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadEmploee } from '../../../redux1/action/auth'
const columns = [
    {
        name: 'Name',
        selector: row => row.name
    },
    {
        name: 'Email',
        selector: row => row.email
    }
  
]
const paginationComponentOptions = {
    selectAllRowsItem: true,
    selectAllRowsItemText: "ALL"
  }

const Table = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadEmploee())
    }, [dispatch])
    const data = useSelector(state => state?.Employee?.employee)
    console.log(data)

    return (
       <Card style = {{ marginLeft:'-130px' }}>
         <DataTable
               
                   title='Employee List'
                   pagination
                    columns={columns}
                    data={data}
                    paginationComponentOptions={paginationComponentOptions}
                />
       </Card>
    )
}
export default Table