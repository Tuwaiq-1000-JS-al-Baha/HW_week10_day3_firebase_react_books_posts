import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import PostsContext from "../utils/PostsContext"

function Posts() {
  const { posts } = useContext(PostsContext)
  return (
    <>
      <h1>Posts</h1>
      <Row cols={4}>
          {posts.map(post=>(
        <Col>
          <Card>
            <Card.Title>{post.title}</Card.Title>
            <Card.Body>
              <Card.Text>Owner:{post.owner}</Card.Text>
              <Card.Img src={post.image} style={{ width: 200 }} />

              <Card.Text>body:{post.body}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
    </>
  )
}

export default Posts
