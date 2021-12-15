import { useContext, useState } from "react"
import PostsContext from "../utils/PostsContext"
import { Button, Card, Col, Row } from "react-bootstrap"
function Books() {
  const { books } = useContext(PostsContext)
  return (
    <>
      <Row cols={4}>
        {books.map(book => (
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>{book.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Img src={book.image} style={{ width: 200 }} />
                <Card.Text>author:{book.author}</Card.Text>
                <Card.Text>{book.description}</Card.Text>
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
export default Books
