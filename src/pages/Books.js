import React, { useState, useEffect } from "react"
import axios from "axios"
import { Card, Row } from "react-bootstrap"
import Footer from "../componets/Footer"

function Books() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    res()
  }, [])

  const res = async () => {
    await axios.get(`http://localhost:5000/getBook`).then(result => {
      setBooks(result.data)
      console.log(result.data)
    })
  }

  return (
    <>
   <Row md={6} xs={1} style={{gap:"15px",marginLeft:"15px"}}>
      {books.map(b => (
        <Card style={{ width: "18rem", marginTop: "10px" }}>
          <Card.Img variant="" height={"400vh"} width={100} src={b.image} />
          <Card.Body>
            <Card.Title>Title : {b.title} </Card.Title>
            <Card.Title>Pages: {b.pages}</Card.Title>
            <Card.Title>Price :{b.price} SAR</Card.Title>
  

          </Card.Body>
        </Card>
      ))}
      </Row>
   
    </>
  )
}

export default Books
