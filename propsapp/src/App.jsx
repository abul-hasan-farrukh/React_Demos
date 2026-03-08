import Users from "./components/Users"
import UserDetails from "./components/UserDetails"
import Alumni from "./components/Alumni"
import Employee from "./components/Employee"
import Course from "./components/Course"
import Program from "./components/Program"
function App() {

  const courseNames = ["MBA", "MCA", "BCA", "B.Tech"]

  //array of objects
  const programArray = [
    {
      name : "BCA",
      duration: "3 Years",
      semester: 6
    },

    {
      name : "MCA",
      duration: "2 Years",
      semester: 4
    },

    {
      name : "B.Tech",
      duration: "4 Years",
      semester: 8
    }
  ]

const EmpObj = {
  name: "John",
  email: "john@gmail.com",
  dept: "Engineering"
}

  return (
    <>
      <h1>User Details</h1>
      <Users
        userName="Annu"
        emailId="day@gmail.com"
        age={23}
      />

      <UserDetails
      deptName = "Engineering"
      designation = "Developer"  
      />

    <div style= {{display: "flex", gap: "10px"}}>

      <Alumni pic="Steve_Jobs.png" name="Steve" course="MCA"/>
      <Alumni pic="Steve_Jobs.png" name="Steve" course="MCA"/>
      <Alumni pic="Steve_Jobs.png" name="Steve" course="MCA"/>
      <Alumni pic="Steve_Jobs.png" name="Steve" course="MCA"/>

</div>

<h1 style={{textAlign: "center"}}>Employee Details are:</h1>
{/* fetching values of object as props which are declared above in EmpObj object */}
<Employee empobj={EmpObj}/> 


<Course courseArray={courseNames}/>

<Program programs={programArray}/>

    </>
  )
}

export default App
