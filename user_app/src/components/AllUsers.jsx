function AllUsers({allUsers}) {
  return (
    <>
    <h1 style={{textAlign: "center", fontFamily: "Arial", marginTop: "15px", marginBottom: "15px"}}>User Details</h1>
    <table className="table table-info table-striped" style={{fontFamily: "Arial"}}>
        <thead>
            <tr>
                <th>Profile Pic</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
        </thead>
        <tbody>
            {
                allUsers.map((userDetail, index) => {
                    return(
                        <tr key={index}>
                            <td><img src={userDetail.profilePic} style={{height: "100px", weight: "100px"}} alt="" /></td>
                            <td>{userDetail.name}</td>
                            <td>{userDetail.email}</td>
                            <td>{userDetail.phone}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    </>
  )
}

export default AllUsers