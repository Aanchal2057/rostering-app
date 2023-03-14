import { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { addEmployee, addStaffrate } from '../../../redux1/action/auth'
import { useDispatch, useSelector } from 'react-redux'
const ModalDialog = () => {
    const [isShow, invokedModal] = useState(false)
    const [isAdd, invokedAdd] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rate, setRate] = useState('')
    const dispatch = useDispatch()
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
   const addemployee = () => {
    const obj = {
        name,
        email,
        password
    }
    dispatch(addEmployee(obj))
    initAdd()
    alert('Employee added sucessfully')
   }

   const addRate = () => {
    const obj = {rate}
    dispatch(addStaffrate(obj))
    alert('Rate added sucessfully')
   }

    return (
        <>
            <Button style={{ marginLeft: "-140px", marginTop: "-20px" }} onClick={initModal}>
                Add Staff Rate
            </Button>
            <Button style={{ marginLeft: '30px', marginTop: "-20px" }} onClick={initAdd}>Add Employee</Button>
            <Modal show={isShow}>
                <Modal.Header  onClick={initModal}>
                    <Modal.Title>Add Staff Rate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label for="fname">Add Staff Rate:</label><br />
                    <input type="text" id="fname" name="fname" onChange={(e) => setRate(e.target.value)} /><br />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick = { addRate }>
                        Add
                    </Button>
                    <Button onClick={click}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
            <Modal show={isAdd}>
                <Modal.Header  onClick={initModal}>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="name" 
                        className="form-control" 
                        id="name"
                         placeholder='Name'
                         onChange={e => setName(e.target.value)}
                         />
                    </div>
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" className="form-control" id="email" placeholder='Email'    onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder='Password'    onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Confirm Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder='Confirm Password' />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={addemployee} >
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
