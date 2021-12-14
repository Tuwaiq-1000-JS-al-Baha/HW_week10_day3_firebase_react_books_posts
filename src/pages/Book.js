import { useContext, useState } from "react"
import PostsContext from "../utils/PostsContext"
import { Card, Col, Row } from "react-bootstrap"

function Books() {
  const { books } = useContext(PostsContext)
  return (
    <div>
      <h1>Book</h1>
      <Row cols={4}>
        {books.map(book => (
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>{book.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>Author: {book.owner}</Card.Text>
                <Card.Img src={book.image} style={{ width: 200 }} />
                <Card.Text>{book.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Books
