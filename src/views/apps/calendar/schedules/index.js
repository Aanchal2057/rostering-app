import React from 'react'
import DataTable from 'react-data-table-component'
import ReactPaginate from 'react-paginate'
const index = () => {
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
    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988'
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984'
        }
    ]
   
    
    return (
        <div>
           
            <DataTable
                pagination
                columns={columns}
                data={data}
                subHeader
                responsive
                paginationServer
                selectableRows
                className='react-dataTable'
                //paginationComponent={CustomPagination}
            />
        </div>
    )
}

export default index
