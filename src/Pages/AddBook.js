import { useContext } from "react"
import { Col, Form, Row, Button } from "react-bootstrap"
import PostContext from "../utils/PostContext"

function AddBook() {
  const { addBook } = useContext(PostContext)
  return (
    <>
      <div className="ms-4">
        <h1>Add Book</h1>
        <Form className="mt-5" onSubmit={addBook}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Titel:
            </Form.Label>
            <Col md="6">
              <Form.Control type="text" name="title" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Descrption:
            </Form.Label>
            <Col md="6">
              <Form.Control type="text" name="descrption" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              image
            </Form.Label>
            <Col md="6">
              <Form.Control type="url" name="image" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Author
            </Form.Label>
            <Col md="6">
              <Form.Control type="text" name="author" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="my-4">
            <Col md={{ span: 10, offset: 2 }}>
              <Button type="submit">Add Book</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default AddBook
