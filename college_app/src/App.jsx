import Hod from "./components/Hod"
import Teacher from "./components/Teacher"

function App() {
  
  const hodObj = {
  hodName: "Dr. Prabhas Chandra Pathak",
  deptName: "prabhas@gmail.com",
  phone: "9532446928"
}

  return (
    <>
      <h1 style={{fontFamily: "monotype corsiva", textAlign: "center"}}>Teacher Details:</h1>

      <div style= {{display: "flex", gap: "10px", justifyContent: "center"}}>
      <Teacher picName="reena.jpg" name="Mrs. Reena" deptName="SOCA" semester={4}/>
      <Teacher picName="reena.jpg" name="Mrs. Akanksha" deptName="SOCA" semester={3}/>
      <Teacher picName="reena.jpg" name="Mrs. Devika" deptName="SOCA" semester={6}/>
      <Teacher picName="reena.jpg" name="Mrs. Anshu" deptName="SOCA" semester={2}/>
      </div>

      <h1 style={{textAlign: "center" , fontFamily: "monotype corsiva"}}>HOD Details are:</h1>
      <Hod hodobj = {hodObj}/>
    </>
  )
}

export default App
