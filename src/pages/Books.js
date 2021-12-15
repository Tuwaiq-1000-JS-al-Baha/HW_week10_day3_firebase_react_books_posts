import { useContext, useState } from "react"
import PostsContext from "../utils/PostsContext"
import { Button, Card, Col, Row } from "react-bootstrap"
import PostEditModal from "../components/PostEditModal"

function Books() {
  const { books, deleteBook } = useContext(PostsContext)

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
                <Card.Text>Author: {book.author}</Card.Text>
                <Card.Img src={book.image} style={{ width: 200 }} />
              </Card.Body>
              <Card.Footer>
                <Button variant="danger" onClick={() => deleteBook(book.id)}>
                  Delete
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Books
