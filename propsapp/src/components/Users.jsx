// passing property 
function Users(props){
    return(
        <>
        <h1>Details are as follows:</h1>
        <h1>User Name is: {props.userName}</h1>
        <h1>User Email is: {props.emailId}</h1>
        <h1>User age is: {props.age}</h1>
        </>
    )
}
export default Users