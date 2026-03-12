function Employee({empobj}){

    const {name, email, dept} = empobj
    return(
        <>
        <h3>Name is {name}</h3>
        <h3>Email is {email}</h3>
        <h3>Dept is {dept}</h3>
        </>
    )
}

export default Employee