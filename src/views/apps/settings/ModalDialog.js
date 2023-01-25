import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
const ModalDialog = () => {
    const [isShow, invokedModal] = useState(false)
    const [isAdd, invokedAdd] = useState(false)
    const [rate, setRate] = useState('2000')
    const initAdd = () => {
        return invokedAdd(!false)
    }
    const initModal = () => {
        return invokedModal(!false)
    }
    const click = () => {
        invokedModal(false)
    }
    const clickOne = () => {
        invokedAdd(false)

    }
    return (
        <>
            <Button style={{ marginLeft: "-140px", marginTop: "-44px" }} onClick={initModal}>
                Add Staff Rate
            </Button>
            <Button style={{ marginLeft: '30px', marginTop: "-44px" }} onClick={initAdd}>Add Employee</Button>
            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>
                    <Modal.Title>Add Staff Rate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label for="fname">Add Staff Rate:</label><br />
                    <input type="text" id="fname" name="fname" onChange={(e) => setRate(e.target.value)} /><br />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={initModal} >
                        Add
                    </Button>
                    <Button onClick={click}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
            <Modal show={isAdd}>
                <Modal.Header closeButton onClick={initModal}>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="name" class="form-control" id="name" placeholder='Name'/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" id="email" placeholder='Email'/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder='Password'/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Confirm Password:</label>
                        <input type="password" class="form-control" id="pwd" placeholder='Confirm Password' />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={initAdd} >
                       Submit
                    </Button>
                    <Button onClick={clickOne}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDialog
