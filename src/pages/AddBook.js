import { useContext } from "react"
import { Col, Form, Row, Button } from "react-bootstrap"
import PostsContext from "../utils/PostsContext"

function AddBook() {
  const { addBook} = useContext(PostsContext)
  return (
    <div className="ms-4 mt-4">
      <h1>Add Book</h1>
      <Form className="mt-5" onSubmit={addBook}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Title
          </Form.Label>
          <Col md="6">
            <Form.Control name="title" type="text" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
          Description
          </Form.Label>
          <Col md="6">
            <Form.Control as="textarea" name="description" rows={3} required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
            Image
          </Form.Label>
          <Col md="6">
            <Form.Control type="file" accept="image/png"  name="image" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="2">
          auther
          </Form.Label>
          <Col md="6">
            <Form.Control type="text" name="author" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="my-5">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit">Add Book</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddBook
