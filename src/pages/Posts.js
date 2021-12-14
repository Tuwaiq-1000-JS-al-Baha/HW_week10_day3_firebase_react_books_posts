
import { useContext, useEffect, useState } from "react"
import { Card , Row,Col,Button } from "react-bootstrap"
import PostsContext from "../utils/PostsContext"
import PostEditModal from "../components/PostEditModal"

function Posts() {

    const{posts , deletePost} = useContext(PostsContext)
    const [show, setShow] = useState(false)
 
return (
    
<>
<h1>posts</h1>
<Row xs={1} md={4} className="g-4">
{posts.map(post => (
    <Col>
      <Card>
        <Card.Img variant="top" src={post.image} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            {post.body}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Button variant="success" className="me-2" onClick={() => setShow(true)}>
                  Edit
                </Button>
            <Button variant="danger" onClick={()=> deletePost(post.id)}>
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
