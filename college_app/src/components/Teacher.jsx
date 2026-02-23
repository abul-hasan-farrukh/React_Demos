function Teacher({name, deptName, semester, picName}){
    const teacherDiv = {
        width: "20%",
        height: "300px",
        backgroundColor: "pink",
        borderRadius: "10px",
        textAlign: "center",
        fontSize: "18px",
        fontFamily: "monotype corsiva"
    }
    return(
        <>
            <div style={teacherDiv}>
                <img src={picName} alt="teacherImage"  style={{width: "100%", height: "50%"}}/>
                <h4>Name: {name}</h4>
                <h4>Department: {deptName}</h4>
                <h4>Semester: {semester}</h4>
            </div>
        </>
    )
}

export default Teacher