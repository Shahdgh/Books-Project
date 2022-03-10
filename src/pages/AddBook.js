import { CDBInput, CDBCard, CDBCardBody, CDBBtn, CDBLink, CDBContainer } from "cdbreact"
import { useContext } from "react"
import { Form } from "react-bootstrap"
import BooksContext from "../utils/BooksContext"

function AddBook() {
  const { addBook } = useContext(BooksContext)

  return (
    <>
      <Form
        style={{ display: "flex", justifyContent: "center", textAlign: "center" }}
        className="mt-5 "
        onSubmit={addBook}
      >
        <CDBCard style={{ width: "30rem" }}>
          <CDBCardBody className="mx-4">
            <div className="text-center mt-4 ">
              <p style={{ textAlgin: "center", alignItems: "center", marginLeft: "3%", fontWeight: "700" }}>
                Added Book
              </p>
            </div>

            <CDBInput material type="text" name="title" hint="Title" required />
            <CDBInput material type="number" name="price" hint="Price" required />
            <CDBInput material type="number" name="pages" hint="Pages" required />
            <CDBInput type="file" accept="image/jpg,image/png" hint="image" name="image" />

            <CDBBtn
              style={{ width: "30%", backgroundColor: "rgb(45, 9, 61)", border: "none" }}
              className="btn-block mt-5 mx-auto"
              type="submit"
            >
              Add Book
            </CDBBtn>
          </CDBCardBody>
        </CDBCard>
      </Form>
    </>
  )
}

export default AddBook
