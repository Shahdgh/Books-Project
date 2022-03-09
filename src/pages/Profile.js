import { useContext, useState } from "react"
import ProfileInformation from "../componets/ProfileInfromation"
import BooksContext from "../utils/BooksContext"

function Profile() {
  const { profiles } = useContext(BooksContext)
  if (!profiles) return <h1>Loading...</h1>
  // console.log(profiles)
  return (
    <>
      <ProfileInformation key={profiles._id} />
    </>
  )
}

export default Profile
