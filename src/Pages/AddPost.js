import { useContext } from "react"
import { Col, Form, Row,Button } from "react-bootstrap"
import PostContext from "../utils/PostContext"

function AddPost() {
  const { addPost } = useContext(PostContext)
  return (
    <>
      <div className="ms-4">
        <h1>Add post</h1>
        <Form className="mt-5" onSubmit={addPost}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Titel
            </Form.Label>
            <Col md="6">
              <Form.Control type="text" name="title" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              body
            </Form.Label>
            <Col md="6">
              <Form.Control type="text" name="body" required />
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
              owenr
            </Form.Label>
            <Col md="6">
              <Form.Control type="text" name="owner" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="my-4">
            <Col md={{ span: 10, offset: 2 }}>
              <Button type="submit">Add post</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default AddPost
