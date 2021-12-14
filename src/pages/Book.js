import { useContext } from "react"
import PostsContext from "../utils/PostsContext"
import { Button, Card, Col, Row } from "react-bootstrap"

function Book() {
  const { books } = useContext(PostsContext)

  if (!books) return <h1>Loodaing...</h1>
  return (
    <>
      <h1>Books</h1>
      <Row cols={4}>
        {books.map(book => (
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>{book.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text> {book.owner}</Card.Text>
                <Card.Img src={book.image} style={{ width: 200 }} />
                <Card.Text>{book.body}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="success" className="me-2">
                  Edit
                </Button>
                <Button variant="danger">Delete</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Book
