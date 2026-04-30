function Footer()
{

    // Using Internal CSS here
    const myStyle = {
        color: "blue",
        paddingTop: "10px"
    }
    return(
        <>
        <div style={{marginTop: "10px", textAlign:"center", width: "100%", height: "50px", backgroundColor: "aqua", fontFamily: "Monotype Corsiva"}}>
            <footer>
                {/* Calling internal CSS here */}
            <h2 style={myStyle}>Designed by Hasan</h2>
            </footer>
        </div>
        </>
    )
}

export default Footer