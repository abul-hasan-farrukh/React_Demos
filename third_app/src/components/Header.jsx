import { Link } from "react-router-dom"
function Header (){
  const font = {
    fontFamily: "monotype corsiva",
    fontSize: "22px"
  }
return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={font}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">Home</Link>
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
        </li>
        <li className="nav-item">
          <Link class="nav-link" to="/about">About Us</Link>
          {/* <a className="nav-link active" aria-current="page" href="#">About Us</a> */}
        </li>
        <li className="nav-item">
          <Link class="nav-link" to="/contact">ContactUs</Link>
          {/* <a className="nav-link active" aria-current="page" href="#">Contact Us</a> */}
        </li>
        <li className="nav-item">
          <Link class="nav-link" to="#">Login</Link>
          {/* <a className="nav-link active" aria-current="page" href="#">Login</a> */}
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
)
}
export default Header