import React from 'react'
import { Button } from 'reactstrap'
import ModalDialog from './ModalDialog'
import Table from './Table'
const index = () => {
  return (
    <>
       <div className="container mt-3">
      <ModalDialog />
      <Table/>
    </div>
    </>
  )
}

export default index
