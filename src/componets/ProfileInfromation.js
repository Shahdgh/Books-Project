import { useContext } from "react"
import BooksContext from "../utils/BooksContext"
import { Image } from "react-bootstrap"
import React from "react"
import { CDBCard, CDBCardBody } from "cdbreact"
import { MdEmail } from "react-icons/md"

function ProfileInformation() {
  const { profiles } = useContext(BooksContext)
  return (
    <>
    <div style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
      <CDBCard style={{ width: "50rem",marginTop:"10px"}}>
        <Image className="img-fluid" src="https://images.pexels.com/photos/2041540/pexels-photo-2041540.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <Image
          style={{ marginTop: "-5rem", textAlign: "center", alignItems: "center", marginLeft: "35%" }}
          className=" border "
          width="190px"
          src={profiles.avatar}
        />
        <CDBCardBody className="d-flex flex-column align-items-center ">
          <h2 style={{ fontSize: "20px", fontWeight: "800",padding:0,margin:3 }}>
           Name/ {profiles.firstName} {profiles.lastName}
          </h2>

          <p style={{ fontSize: "15px", fontWeight: "800" ,padding:0,margin:3 }}>
            <MdEmail /> Emial : {profiles.email}
          </p>
        </CDBCardBody>
      </CDBCard>
      </div>
    </>
  )
}

export default ProfileInformation
