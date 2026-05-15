import AllUsers from "./components/AllUsers"

function App() {

  const users = [
    {
      name: "Mr. Tyagi",
      email: "steve@gmail.com",
      phone: "9532446938",
      profilePic: "/tyagi.jpg"
    },

     {
      name: "Mr. Adesh",
      email: "prabhas@gmail.com",
      phone: "9532446938",
      profilePic: '/adesh.jpg'
    },

     {
      name: "Dr. Praveen",
      email: "praveen@gmail.com",
      phone: "9532446938",
      profilePic: '/praveen.jpg'
    },

     {
      name: "Dr. Reena",
      email: "reena@gmail.com",
      phone: "9532446938",
      profilePic: '/reena.jpg'
    },

     {
      name: "Dr. Rizwi",
      email: "rizwi@gmail.com",
      phone: "9532446938",
      profilePic: '/rizwi.png'
    }
  ]

  return (
    <>
      <AllUsers allUsers={users}/>
    </>
  )
}

export default App
