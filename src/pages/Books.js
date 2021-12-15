import { useContext } from "react"
import BooksContext from "../utils/BooksContext "
import {  Card, Col, Row } from "react-bootstrap"


function Books() {
  const { books} = useContext(BooksContext)

  return (
    <>
      <h1>books</h1>
      <Row cols={4}>
        {books.map(book => (
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>{book.title}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>{book.description}</Card.Text>
                <Card.Img src={book.image} style={{ width: 200 }} />
                <Card.Text>Price: {book.Price}</Card.Text>
              </Card.Body> 
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default  Books
