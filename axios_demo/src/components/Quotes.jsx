import axios from 'axios'
import { useState } from 'react'

function Quotes() {

    
    const apiURL = "https://dummyjson.com/quotes"

    const [quotes, setQuotes] = useState([])

    //asynchronous functions are used when working with API.
    const showQuotes = async () => {
        try {
            const response = await axios.get(apiURL)
            // console.log(response);

            const quotesData = response.data.quotes; //fetching array of dummy API.
            console.log(quotesData);
            setQuotes(quotesData); //updating state here.
            
            
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <>
    <button onClick={showQuotes}>Show Quotes</button>
    {
        quotes.map((quotesObj)=> {
            return(
                <div key={quotesObj.id}>
                    <blockquote>{quotesObj.quote}</blockquote>
                    <h6><i>Author: {quotesObj.author} </i></h6>
                </div>
            )
        })
    }
    </>
  )
}

export default Quotes