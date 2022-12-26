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
        },
        {
            name:'ADMIN APPROVAL'
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
            title="Approve Tasks"
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
