import { Fragment, useState, useEffect } from 'react'
import DataTable from 'react-data-table-component'

const Table = (event) => {
    const data1 = event
    console.log(data1)
  const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true
    },
    {
        name: 'Rate',
        selector: row => row.year,
        sortable: true
    },
    {
        name: 'Cost',
        selector: row => row.year,
        sortable: true
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
    <DataTable
    columns={columns}
    data={data}
    responsive
/>
  )
}

export default Table
