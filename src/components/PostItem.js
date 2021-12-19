import { useContext, useState } from "react"
import PostsContext from "../utils/PostsContext"
import { Button, Card, Col,  } from "react-bootstrap"
import PostEditModal from "../components/PostEditModal"

function PostItem(props) {
    const{post}=props
  const {  deletePost } = useContext(PostsContext)
  const [show, setShow] = useState(false)
  return (
    <>
      
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
        </>
  )
}

export default PostItem
