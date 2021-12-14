import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import PostsContext from "../utils/PostsContext"

function PostEditModal(props) {
  const { editPost } = useContext(PostsContext)
  const { show, setShow, post } = props
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Form className="mt-5" onSubmit={e => editPost(e, post.id)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Title
            </Form.Label>
            <Col md="6">
              <Form.Control name="title" type="text" defaultValue={post.title} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Body
            </Form.Label>
            <Col md="6">
              <Form.Control as="textarea" name="body" rows={3} defaultValue={post.body} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Image
            </Form.Label>
            <Col md="6">
              <Form.Control type="url" name="image" defaultValue={post.image} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Owner
            </Form.Label>
            <Col md="6">
              <Form.Control name="owner" type="text" defaultValue={post.owner} />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={() => setShow(false)}>
            Edit Post
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default PostEditModal
