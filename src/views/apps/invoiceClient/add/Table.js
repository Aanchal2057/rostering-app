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
        name: 'department',
        selector: row => row.department,
        sortable: true
    },
    {
        name: 'Cost',
        selector: row => row.client_rate,
        sortable: true
    }
  ]

  return (
    <DataTable
    columns={columns}
    data={event}
    responsive
/>
  )
}

export default Table
