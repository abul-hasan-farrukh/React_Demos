import axios from 'axios'
import { useEffect, useState } from 'react'

//useEffect will get called immediately after the page or component renders or loads, useEffect is also a function, which accepts two parameters, 
// 1st is callback function and 2nd is dependency array(optional). It is widely used in API calls.

// if we don't pass dependency array then it will get called whenever component get rendered.
// if we pass empty dependency array then it will get called only once.
// if we pass state variable then will get called whenever the value of state variable changes.
function QuotesuseEffect() {

    
    const apiURL = "https://dummyjson.com/quotes"

    const [quotes, setQuotes] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get(apiURL)
            // console.log(response);

            const quotesData = response.data.quotes; //fetching array of dummy API.
            console.log(quotesData);
            setQuotes(quotesData); //updating state here.
            
            
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

export default QuotesuseEffect