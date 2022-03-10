import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
import { Card, Row } from "react-bootstrap"
import { toast } from "react-toastify"
import firebase from "../utils/firebase"
import BooksContext from "../utils/BooksContext"

function Books() {
  const {books}=useContext(BooksContext)
  
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
