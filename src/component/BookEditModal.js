import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import PostContext from "../utils/PostContext"

function BookEditModal(props) {
  const { show, setShow, book } = props
  const { editbook } = useContext(PostContext)
  return (
    <>
      {" "}
      <Modal show={show} onHide={() => setShow(false)}>
        <Form className="mt-5" onSubmit={e => editbook(e, book.id)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Title
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="title" defaultValue={book.title} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Descrption
              </Form.Label>
              <Col md="8">
                <Form.Control type="textarea" name="descrption" defaultValue={book.descrption} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                Author:
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="author" defaultValue={book.author} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                image
              </Form.Label>
              <Col md="8">
                <Form.Control type="url" name="image" defaultValue={book.image} />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="success" type="submit" onClick={() => setShow(false)}>
              Confirm Edit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default BookEditModal
