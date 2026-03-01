import { useState } from "react"
function Counter() {
    //Hook is a built-in function which works with state variable
    let [count, setCount] = useState(0)

    const increment = () => {
        // count = count+1;
        setCount(count+=1)
        console.log(`count value is ${count}`);
        
    } 
    
    const decrement = () => {
        setCount(count-=1)
        console.log(`count value is ${count}`);
    } 

  return (
    <>
    <h1>Learning useState Hook</h1>
    <h3>Count value is {count}</h3>
    <button onClick={increment}>Increase</button>
    <button onClick={decrement}>Decrease</button>
    </>
  )
}

export default Counter