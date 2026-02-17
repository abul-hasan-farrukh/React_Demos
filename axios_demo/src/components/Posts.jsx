import axios from 'axios'
import { useState } from 'react'

function Posts() {
    const apiURL = "https://dummyjson.com/posts"
    //asynchronous functions are used when working with API.
    const showPosts = async () => {
        try {
            const response = await axios.get(apiURL)
            // console.log(response);

            const postsData = response.data.posts;
            console.log(postsData);
            
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
    <button onClick={showPosts}>Show Posts</button>
    </>
  )
}

export default Posts