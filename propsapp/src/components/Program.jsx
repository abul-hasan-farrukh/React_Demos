function Program({programs}) {
  return (
    <>
    <h1 style={{textAlign: "center", color: "blue"}}>Program names are</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Duration</th>
                    <th>Semester</th>
                </tr>
            </thead>
            <tbody>
                {
                    programs.map((courseDetail, index)=> { //passing index is mandatory to improve performance, when we use loop inside an element.
                            return(
                                <tr key={index}>
                                    <td>{courseDetail.name}</td>
                                    <td>{courseDetail.duration}</td>
                                    <td>{courseDetail.semester}</td>
                                </tr>
                            )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default Program