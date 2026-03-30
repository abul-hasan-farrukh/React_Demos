import { useState } from "react"

export default function Registration() {

  const [data, setData] = useState(
    {name: "", email: "", phoneNo: "", city: "", address: ""} //attributes name must be similar to "name" of input tag
  )  //state varibale is an object

  const fetchData = (e) => { // "e" is an event object
      // console.log(e.target.name); //extracting name typed by user
      // console.log(e.target.value); //extracting value typed by user
      
      setData({...data, [e.target.name]: e.target.value}) //setting values(name, email, phoneNo, question) typed by user in object using spread operator.

  }

  const submitForm = (e)=> {
      e.preventDefault()
      console.log(`name is ${data.name}`);
      console.log(`email is ${data.email}`);
      console.log(`phoneNo is ${data.phoneNo}`);
      console.log(`city is ${data.city}`);
      console.log(`address is ${data.address}`);
      
  }

  return (
   <>
   <div className="mx-auto w-50 mt-5">
    {/* //when user submit the form, onSubmit event is called */}
      <form onSubmit={submitForm}> 
      <div className="mb-3">
      <label htmlFor="name" className="form-label">Enter Name:</label>
      <input type="text" name="name" id="" className="form-control" placeholder="Enter name" value={data.name} onChange={fetchData}/>
      </div>

      <div className="mb-3">
      <label htmlFor="email" className="form-label">Enter Email:</label>
      <input type="email" name="email" id="" className="form-control" placeholder="Enter email id" value={data.email} onChange={fetchData}/>
      </div>

      <div className="mb-3">
      <label htmlFor="phoneNo" className="form-label">Enter Phone:</label>
      <input type="number" name="phoneNo" id="" className="form-control"  placeholder="Enter phone number" value={data.phoneNo} onChange={fetchData}/>
      </div>

      <div>
          <label htmlFor="city" className="form-label">City:</label>
          <select name="city" className="form-select" value={data.city} onChange={fetchData}>
            <option>Select your city</option>
            <option>Lucknow</option>
            <option>Barabanki</option>
            <option>Kanpur</option>
          </select>
      </div>


      <div className="mb-3 mt-3">
      <label htmlFor="address" className="form-label">Enter Address:</label>
      <textarea name="address" className="form-control" placeholder="Enter address" value={data.address} onChange={fetchData}></textarea>
      </div>

        <div className="d-grid mt-5 col-6 mx-auto">
        <button className="btn btn-primary">Submit</button>
        </div>

      </form>
   </div>
   </>
  )
}    