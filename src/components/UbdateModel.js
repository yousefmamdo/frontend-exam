import React from 'react';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class UbdateModel extends React.Component {
    render() {
return(

    <Modal.Dialog show={this.props.show}onHide={this}>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <Form>
  <Form.Group className="mb-3"name='' controlId="formBasicEmail">
    <Form.Label></Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label></Form.Label>
    <Form.Control type="text" placeholder="Enter image" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label></Form.Label>
    <Form.Control type="text" placeholder="Enter price" />
  </Form.Group>
  
  
</Form>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
)

    }
}
export default  (UbdateModel)