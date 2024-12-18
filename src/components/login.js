import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth, googleAuthProvider } from "../firebaseConfig"


const Login = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
        await signInWithEmailAndPassword(auth,email,password) 
            console.log("succesfull login")
            setEmail("")
            setPassword("")
            navigate("/home")
        }catch(err){
            console.log("sign in with email and password error",err.message)
        }

    }
    const handleGoogleSignIn = async (e)=>{
        e.preventDefault()
        try{
            const result = await signInWithPopup(auth,googleAuthProvider)
            navigate("/home")
            console.log(result)
        }catch(err){
            console.log(err.message)
        }
    }
    return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
        <button type="submit">Login</button>
        <button onClick={handleGoogleSignIn}>SignIn with Google</button>
        <Link to="/signup"><p>Not registerd? Register here</p></Link>
    </form>
    )
}

export default Login