function ContactUs() {
    return (
        <>
            {/* Boostrap Form */}
            <div className="w-50 mx-auto mt-5 mb-5" style={{border: "2px solid blue", borderRadius:"10px"}}>
                <form action="">
                    <div className="form-floating mb-3 mt-3">
                        <input type="text" className="form-control" placeholder="Enter your name" name="username"/>
                        <label htmlFor="floatingInput">Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" placeholder="Enter your phone" name="phoneNo"/>
                        <label htmlFor="floatingInput">Phone No</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" placeholder="Enter your email" name="emailID"/>
                        <label htmlFor="floatingInput">Email</label>
                    </div>

                    <div className="form-floating mb-3">
                        <textarea className="form-control" name="query" id=""></textarea>
                        <label htmlFor="floatingInput">Question</label>
                    </div>


                <div className="text-center">
                    <button className="btn btn-success mb-3">Submit</button>
                </div>
                </form>
            
            
            </div>

        </>
    )
}

export default ContactUs