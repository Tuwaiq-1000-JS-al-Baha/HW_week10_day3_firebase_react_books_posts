import { useContext, useState } from "react"
import PostsContext from "../utils/PostsContext"
import { Button, Card, Col, Row } from "react-bootstrap"
import PostEditModal from "../components/PostEditModal"

function Posts() {
  const { posts, deletePost } = useContext(PostsContext)
  const [show, setShow] = useState(false)
  return (
    <>
      <h1>Posts</h1>
      <Row cols={4}>
        {posts.map(post => (
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>{post.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>Owner: {post.owner}</Card.Text>
                <Card.Img src={post.image} style={{ width: 200 }} />
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="success" className="me-2" onClick={() => setShow(true)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => deletePost(post.id)}>
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
