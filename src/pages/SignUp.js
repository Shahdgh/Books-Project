import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBLink, CDBContainer } from 'cdbreact';
import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import BooksContext from '../utils/BooksContext';
import React from "react"

function SignUp() {
    const {signup}=useContext(BooksContext)
    return (  <>
   
<Form style={{display:"flex",justifyContent:"center",textAlign:"center"}} className="mt-5 " onSubmit={signup}>
{/* <CDBContainer> */}
      <CDBCard style={{ width: '30rem' }}>
        <CDBCardBody className="mx-4">
          <div className="text-center mt-4 ">
            <p  style={{textAlgin:"center",alignItems:"center",marginLeft:"3%",fontWeight:"700" }} >SignUp</p>
          </div>
         
          <CDBInput material type="text" name="firstName" hint="First Name" required  />
          <CDBInput material type="text"name="lastName" hint="Last Name" required /> 
          <CDBInput material type="email" name="email" hint="E-mail" required />
          <CDBInput type="file" accept="image/jpg,image/png" hint="Avatar" name="avatar" />
          <CDBInput material type="password" name="password" hint="password" required /> 
          <CDBBtn
            style={{ width: "30%", backgroundColor: "rgb(45, 9, 61)", border: "none" }}
            className="btn-block mt-5 mx-auto"
            type="submit"
          >
            SignUp
          </CDBBtn>
        </CDBCardBody>
      </CDBCard>
    {/* </CDBContainer> */}
    </Form>
    </>);
}

export default SignUp;