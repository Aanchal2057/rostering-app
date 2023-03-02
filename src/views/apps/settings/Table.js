import DataTable from 'react-data-table-component'
import { Card } from 'reactstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadEmploee } from '../../../redux1/action/auth'
const columns = [
    {
        name: 'Name',
        selector: row => row.title
    },
    {
        name: 'Email',
        selector: row => row.year
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
// ]

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
                    columns={columns}
                    data={data}
                />
       </Card>
    )
}
export default Table