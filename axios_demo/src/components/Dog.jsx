import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
function Dog() {

    const [dog, setDog] = useState({})

    const dogAPI = "https://dog.ceo/api/breeds/image/random"

    const fetchData = async () => {
         try {
            const serverResponse = await axios.get(dogAPI)
            console.log(serverResponse);
            setDog(serverResponse.data)
            
            
        } catch (error) {
            console.log(error);
            
        }
    } //fetchData close

    useEffect(()=>{
        fetchData()
        
    },[dog])
  return (
    <>
        <img src={dog.message} style={{width: "200px", height: "200px"  }} alt="" />
    </>
  )
}

export default Dog