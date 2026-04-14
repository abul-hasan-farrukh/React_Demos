function Login() {
    return (
        <>
            <div className="w-50 mx-auto">


                <form action="">
                    <div className="input-group mb-3">
                        <span className="input-group-text">
                            <i className="far fa-envelope-open"></i>
                        </span>
                        <input type="text" className="form-control" placeholder="Enter your email" />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text">
                            <i className="fas fa-key"></i>
                        </span>
                        <input type="password" className="form-control" placeholder="Enter your password" />
                    </div>

                    <div className="text-center">
                        <button className="btn btn-success">Submit</button>
                    </div>
                </form>

            </div>
        </>
    )
}
export default Login