import { Fragment, useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'

const Table = ({event}) => {
   console.log(event)
  const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true
    },
    {
        name: 'Rate',
        selector: row => row.staff_rate,
        sortable: true
    },
    {
        name: 'Cost',
        selector: row => row.staff_rate,
        sortable: true
    }
  ]
  
  return (
    <DataTable
       noHeader
    columns={columns}
    data={event}
    responsive
/>
  )
}

export default Table
