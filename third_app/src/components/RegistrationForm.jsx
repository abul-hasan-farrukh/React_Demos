function RegistrationForm() {
    return (
        <>
            <div className="flexContainer">
                <div>
                    <img className="img" src="images/registration.png" alt="" />
                </div>

                <div className='formContainer' style={{border: "3px solid blue", borderRadius:"10px"}}>
                    <form action="">

                        <div className="input-group mb-3 ">
                            <span className="input-group-text">
                                <i class="fa-solid fa-user"></i>
                            </span>
                            <input type="text" className="form-control bg-primary-subtle" placeholder="Enter your name" />
                        </div>


                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <i className="far fa-envelope-open"></i>
                            </span>
                            <input type="email" className="form-control bg-primary-subtle" placeholder="Enter your email" />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">
                                <i className="fas fa-phone"></i>
                            </span>
                            <input type="number" className="form-control bg-primary-subtle" placeholder="Enter your phone" />
                        </div>

                        <div class="input-group mb-3">
                            <label class="input-group-text" for="inputGroupSelect01"><i class="fa-solid fa-city"></i></label>
                            <select class="form-select bg-primary-subtle" id="inputGroupSelect01">
                                <option selected>Select city...</option>
                                <option value="1">Lucknow</option>
                                <option value="2">Barabanki</option>
                                <option value="3">Kanpur</option>
                            </select>
                        </div>

                        <div class="input-group">
                            <span class="input-group-text"><i class="fa-solid fa-address-card"></i></span>
                            <textarea class="form-control bg-primary-subtle" aria-label="With textarea"></textarea>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default RegistrationForm