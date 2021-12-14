import { useContext } from "react"
import BooksContext from "../utils/BooksContext"
import {  Card, Col, Row } from "react-bootstrap"


export default function Books() {
  const { books } = useContext(BooksContext)
 
  return (
    <>
      <h1>Books</h1>
      <Row cols={4}>
        {books.map(book => (
          <Col>
            <Card>
              <Card.Header>
                <Card.Title><strong>Title:</strong> {book.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text><strong>Description:</strong> {book.description}</Card.Text>
                <Card.Img src={book.image} style={{ width: 200 }} />
                <Card.Text><strong>Author:</strong> {book.author}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}


