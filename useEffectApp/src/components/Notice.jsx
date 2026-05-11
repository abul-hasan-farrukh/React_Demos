import axios from 'axios'
import { useEffect, useState } from 'react'

//useEffect will get called immediately after the page or component renders or loads, useEffect is also a function, which accepts two parameters, 
// 1st is callback function and 2nd is dependency array(optional). It is widely used in API calls.

// if we don't pass dependency array then it will get called whenever component get rendered.
// if we pass empty dependency array then it will get called only once.
// if we pass state variable then will get called whenever the value of state variable changes.

function Notice() {

    const apiURL = "https://fake-json-api.mock.beeceptor.com/notifications"

    const [notice, setNotice] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get(apiURL)
            // console.log(response);

            const noticeData = response.data; //fetching array of dummy API.
            // console.log(noticeData);
            setNotice(noticeData); //updating state here.
            
            
        } catch (error) {
            console.log(error);
        }
    } //fetchData close

    useEffect(() => {
        console.log("Use effect called");
        fetchData()
    }, [])
    

  return (
    <>
        <h1 style={{textAlign: 'center', fontFamily: "monotype corsiva"}}>Notice Board</h1>
    <div className='flexContainer'>
    {
        notice.map((noticeObj)=> {
            return(
                <div className="noticeCard" key={noticeObj.id}>
                    <h3 className="noticeTitle">{noticeObj.title}</h3>
                    <p className="noticeMessage">{noticeObj.message}</p>
                </div>
            )
        })
    }
    </div>
    </>
  )
}

export default Notice