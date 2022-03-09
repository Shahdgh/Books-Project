import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import CardAuthors from "../componets/CardAuthors"
import BooksContext from "../utils/BooksContext"

function Author() {
  const { authors } = useContext(BooksContext)
  
  return (
    <>
      
        <Col>
          <Row xs={1} md={4} style={{marginLeft:"5px"}}>
            {authors.map(author => (
              <CardAuthors author={author} />
            ))}
          </Row>
        </Col>
      
    </>
  )
}

export default Author
