import { useContext, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import PostEditModal from "../component/PostEditModal"
import PostContext from "../utils/PostContext"

function Posts() {
  const { posts, deletPost } = useContext(PostContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1> posts</h1>
      <Row cols={4}>
        {posts.map(post => (
          <Col>
            <Card>
              <Card.Title>Title :{post.title}</Card.Title>
              <Card.Body>
                <Card.Text>Owner :{post.owner}</Card.Text>
                <Card.Img src={post.image} style={{ height: 200 }} />
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="success" className="me-2" onClick={() => setShow(true)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => deletPost(post.id)}>
                  Delete
                </Button>
              </Card.Footer>
            </Card>
            <PostEditModal show={show} setShow={setShow} post={post} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Posts
