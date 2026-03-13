// function UserDetails(props){
function UserDetails({deptName, designation}){
    // receiving data in props object and destructing it together
    {/* destructuring props object below */}
    // const {deptName, designation} = props

    return(                                        
        <>
        <h1>Dept name is {deptName}</h1>    
        <h1>Designation is {designation}</h1>    
        </>
    )
}

export default UserDetails