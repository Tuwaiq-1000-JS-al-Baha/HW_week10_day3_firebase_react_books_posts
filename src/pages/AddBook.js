import { useContext } from "react"
import { Button, Form, Row, Col } from "react-bootstrap"
import PostsContext from "../utils/PostsContext"

function AddBook() {
  const { addBook } = useContext(PostsContext)
  return (
    <div className="ms-4">
      <h1>Add Book</h1>
      <Form className="mt-5" onSubmit={addBook}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Title
          </Form.Label>
          <Col>
            <Form.Control name="title" type="text" required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            description
          </Form.Label>
          <Col>
            <Form.Control name="description" type="text" rows={3} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Image
          </Form.Label>
          <Col>
            <Form.Control name="image" type="url" rows={3} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Auther
          </Form.Label>
          <Col>
            <Form.Control name="auther" type="text" rows={3} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit"> Add Book</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddBook
