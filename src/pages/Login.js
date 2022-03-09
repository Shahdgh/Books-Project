import React from "react"
import { CDBInput, CDBCard, CDBCardBody, CDBBtn } from "cdbreact"
import { useContext } from "react"
import {  Form } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"
function Login() {
  const { login } = useContext(BooksContext)
  return (
    <>
      <Form
        style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
        className="form-login mt-5 "
        onSubmit={login}
      >
        <CDBCard style={{ width: "40rem", height: "30%" }}>
          <CDBCardBody className="mx-4">
            <div className="text-center mt-4 ">
              <p style={{ textAlgin: "center", alignItems: "center", marginLeft: "3%", fontWeight: "700" }}>Login</p>
            </div>

            <CDBInput material type="email" name="email" hint="E-mail" required />

            <CDBInput material type="password" name="password" hint="password" required />
            <CDBBtn
              style={{ width: "30%", backgroundColor: "rgb(45, 9, 61)", border: "none" }}
              className="btn-block mt-5 mx-auto"
              type="submit"
            >
              Login
            </CDBBtn>
          </CDBCardBody>
        </CDBCard>
      </Form>
    </>
  )
}

export default Login
