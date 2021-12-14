import { useContext } from "react"
import PostsContext from "../utils/PostsContext"
import { Card, Col, Row } from "react-bootstrap"


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
                <Card.Text> author: {book.author}</Card.Text>
                <Card.Img src={book.image} style={{ width: 200 }} />
                <Card.Text>{book.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}
export default Books