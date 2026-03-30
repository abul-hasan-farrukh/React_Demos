import { useState } from 'react'


export default function Login() {
    
    const [userid, setUserId] = useState("")
const [password, setPassword] = useState("")

const fetchUserId = (e) => {
    setUserId(e.target.value)
}

const fetchPassword = (e) => {
    setPassword(e.target.value)
}

const submitForm = (e) => {
    e.preventDefault()
    console.log(`userId is ${userid}`);
    console.log(`Password is ${password}`);
    
}

  return (
    <>
        <form onSubmit={submitForm}>
            <input type="text" name="userid" id=""  onChange={fetchUserId} value={userid}/><br />
            <input type="password" name="password" id="" onChange={fetchPassword} value={password}/><br />
            <button>Jama Karo</button>
        </form>
    </>
  )
}

