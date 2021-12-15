import { useContext } from "react"
import { Form, Col, Row, Button } from "react-bootstrap"
import PostsContext from "../utils/PostsContext"

function AddBook() {
  const { addBook } = useContext(PostsContext)
  return (
    <div className="ms-4">
      <h1>ADD BOOK</h1>
      <Form className="mt-5" onSubmit={addBook}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            TITLE
          </Form.Label>
          <Col md="6">
            <Form.Control name="title" type="text" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            DISCRIPTION
          </Form.Label>
          <Col md="6">
            <Form.Control as="textarea" name="discription" rows={3} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            IMAGE
          </Form.Label>
          <Col md="6">
            <Form.Control type="url" name="image" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            AUTHER
          </Form.Label>
          <Col md="6">
            <Form.Control name="auther" type="text" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="my-5">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">ADD BOOK</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddBook
