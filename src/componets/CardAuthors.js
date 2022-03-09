import {Button, Card,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function CardAuthors(props) {
    const {author}=props
    console.log(author)
    return (  <>
   <Col>
     
    
<Card style={{ width: '18rem',marginTop:"10px" }}>
  <Card.Img variant="top" src={author.image} />
  <Card.Body>
    <Card.Title>{author.name}</Card.Title>

    <Button style={{  marginBottom: "5px",backgroundColor:"rgb(45, 9, 61)",color:"white",textDecoration:"none" }} variant="" className="" ><Link to={`/authors/${author._id}`} style={{textDecoration:"none",color:"white"}}>More</Link></Button>
  </Card.Body>
</Card>
</Col>
    </>);
}

export default CardAuthors