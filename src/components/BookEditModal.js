import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import PostsContext from "../utils/PostsContext"

function BookEditModal(props) {
  const { editBook } = useContext(PostsContext)
  const { show, setShow, book } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editBook(e, book.id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Title
            </Form.Label>
            <Col md="6">
              <Form.Control name="title" type="text" defaultValue={book.title} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              NumberOfCopies
            </Form.Label>
            <Col md="6">
              <Form.Control name="numberOfCopies" type="number" defaultValue={book.numberOfCopies} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Author
            </Form.Label>
            <Col md="6">
              <Form.Control name="author" type="text" defaultValue={book.author} />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Edit Book
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default BookEditModal
