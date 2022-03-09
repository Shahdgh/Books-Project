import { useContext } from "react"
import { Card, Col, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import BooksContext from "../utils/BooksContext"

function OneAuthor() {
  const { authorId } = useParams()
  const { authors } = useContext(BooksContext)
  if (!authors.length === 0) return <h1>Loading...............</h1>
  const author = authors.find(author => author._id === authorId)
  return (
    <>
      <Row
        style={{
          backgroundImage: `linear-gradient(rgba(2,25,160, 0.5), rgba(255,255,255, 0.3)),  url(${author.image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <Col md="5" style={{ marginLeft: "6px" }}>
          <Card style={{ width: "18rem", marginTop: "10px" }}>
            <Card.Img variant="top" src={author.image} />
            <Card.Body>
              <Card.Title style={{ color: "black" }}>Author Name : {author.name}</Card.Title>
              <Card.Title style={{ color: "black" }}>Gender : {author.gender}</Card.Title>
              <Card.Title style={{ color: "black" }}>Age : {author.age}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h3 style={{ margin: "15px" }}>Books Author</h3>
      <Row md={6} xs={1} style={{gap:"15px",marginLeft:"15px"}}>
      {author.books?.map(book => (
        <Card style={{ width: "18rem", marginTop: "10px" }}>
          <Card.Img variant="top" src={book?.image} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>Title : {book?.title}</Card.Title>
          </Card.Body>
        </Card>
      ))}
      </Row>
    </>
  )
}

export default OneAuthor
