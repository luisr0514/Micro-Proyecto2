import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from '../credenciales';
import  {UserContext}  from '../context/user';

export default function UseProvider({children}){
    const [user, setUser] = useState(null)

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            console.log(user!==null ? 'Usuario loggeado':'Usuario no loggeado');
            setUser(user)
            
        });
    }, [])

    return <UserContext.Provider value={user}>{children}</UserContext.Provider>
    
}