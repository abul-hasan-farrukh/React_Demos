//child component
function Course({courseArray}) {
    // courseArray.forEach(element => {
    //     console.table(element);
    // });


  return (
    <>
    <h1>Course Names are as follows:</h1>
    
        {
            //map function returns an array
        courseArray.map((names, index) => {
            return(
                <p key={index} style={{fontSize: "22px", color: "blue"}}>{names} {index}</p> //passing a key is compulsory when passing data through loops
            )
        })
        }
    </>
  )
}

export default Course