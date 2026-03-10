function Alumni({ name, course, pic }) {
    const alumniDiv = {
        width: "10%",
        height: "300px",
        backgroundColor: "cyan"
    }
    return (
        <>
            <div style={alumniDiv}>
                <img src={pic} alt="userImage"  style={{width: "100%", height: "50%"}}/>
                <h3>Name is {name}</h3>
                <h3>Course is {course}</h3>
            </div>
        </>
    )
}

export default Alumni