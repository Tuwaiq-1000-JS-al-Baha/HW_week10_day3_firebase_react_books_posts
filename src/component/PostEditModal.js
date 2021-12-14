import { useContext } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import PostContext from "../utils/PostContext"

function PostEditModal(props) {
  const { show, setShow, post } = props
  const { editpost } = useContext(PostContext)
  return (
    <>
      {" "}
      <Modal show={show} onHide={() => setShow(false)}>
        <Form className="mt-5" onSubmit={e => editpost(e, post.id)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                title
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="title" defaultValue={post.title} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                body
              </Form.Label>
              <Col md="8">
                <Form.Control type="textarea" name="body" defaultValue={post.body} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                owner
              </Form.Label>
              <Col md="8">
                <Form.Control type="text" name="owner" defaultValue={post.owner} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="3">
                image
              </Form.Label>
              <Col md="8">
                <Form.Control type="url" name="image" defaultValue={post.image} />
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

export default PostEditModal
