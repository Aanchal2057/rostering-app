import {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
const ModalDialog = () => {
    const [isShow, invokedModal] = useState(false)
    const initModal = () => {
        return invokedModal(!false)
    }
    const click = () => {
       invokedModal(false)
    }
  return (
   <>
    <Button style={{ margin:"-151px" }} onClick={initModal}>
        Open Modal
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>React Modal Popover Example</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={click}>
            Close
          </Button>
          <Button variant="dark" onClick = {initModal} >
            Store
          </Button>
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default ModalDialog
