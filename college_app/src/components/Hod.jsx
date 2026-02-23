function Hod({hodobj}){
    return(
        <>
        <div style={{textAlign: "center", fontFamily: "monotype corsiva"}}>
        <h1>Name: {hodobj.hodName}</h1>
        <h1>Deptartment: {hodobj.deptName}</h1>
        <h1>Phone: {hodobj.phone}</h1>
        </div>
        </>
    )
}

export default Hod