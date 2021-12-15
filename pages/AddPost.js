
import { useContext } from "react"
import {Button ,Col, Form, Row } from "react-bootstrap"
import PostsContext from "../utils/PostsContext"


function AddPost() {
  const { addPost } = useContext(PostsContext)
  return (
    <div className="ms-4">
      <h1>Add post</h1>
      <Form className="mt-5" onSubmit={addPost}>
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
            Body
          </Form.Label>
          <Col>
            <Form.Control name="body" type="body" rows={3} required />
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
            Owner
          </Form.Label>
          <Col>
            <Form.Control name="owner" type="text" rows={3} required />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col md={{ span: 10, offset: 2 }}>
            <Button type="submit"> Add Post</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}
export default AddPost
