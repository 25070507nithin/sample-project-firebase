import { createUserWithEmailAndPassword, signOut } from "firebase/auth"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth } from "../firebaseConfig"



const SignUp = ()=>{
    const [fName, setFname] = useState("")
    const [lName, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            console.log("user sucessfully register")
            await signOut(auth)
            navigate("/login")
        }catch(err){
            console.log(err.message)
        }
        
    }
    return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="fName">First Name</label>
        <input id="fName" type="text" onChange={(e)=>setFname(e.target.value)} value={fName}/>
        <label htmlFor="lName">Last Name</label>
        <input id="lName" type="text" onChange={(e)=>setLname(e.target.value)} value={lName} />
        <label htmlFor="email">Email</label>
        <input id="email" type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
        <button type="submit">SignUp</button>
        <Link to="/login"><p>Already User? Login</p></Link>
    </form>
    )
}

export default SignUp