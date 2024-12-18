import { signOut } from "firebase/auth"
import { auth } from "../firebaseConfig"
import { useNavigate } from "react-router-dom"
const Home = ()=>{
    const navigate = useNavigate()
    const handleSignOut = async()=>{
        try{
            await signOut(auth)
            navigate("/login")
        }catch(err){
            console.error(err.message)
        }
    }
    return(
<>
    Welcome Home
    <button onClick={handleSignOut}>SignOut</button>
    </>
    )
    
}

export default Home