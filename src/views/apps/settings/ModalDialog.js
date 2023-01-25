import {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
const ModalDialog = () => {
    const [isShow, invokedModal] = useState(false)
    const [rate, setRate] = useState('2000')
    const initModal = () => {
        return invokedModal(!false)
    }
    const click = () => {
       invokedModal(false)
    }
  return (
   <>
    <Button style={{ margin:"-151px" }} onClick={initModal}>
       Add Staff Rate
      </Button>
      <Modal show={isShow}>
        <Modal.Header closeButton onClick={initModal}>
          <Modal.Title>Add Staff Rate</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <label for="fname">Add Staff Rate:</label><br/>
        <input type="text" id="fname" name="fname" onChange={(e) => setRate(e.target.value)}/><br/>
        </Modal.Body>
        <Modal.Footer>
        <Button  onClick = {initModal} >
            Add
          </Button>
          <Button  onClick={click}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
   </>
  )
}

export default ModalDialog
