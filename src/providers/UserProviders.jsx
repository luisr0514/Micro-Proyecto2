import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from '../credenciales';
import { UserContex } from "../context/user";

export default function UseProvider({children}){
    const [user, setUser] = useState(null)

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            console.log(user!==null ? 'Usuario loggeado':'Usuario no loggeado');
            setUser(user)
        });
    }, [])

    return <UserContex.Provider value={user}>{children}</UserContex.Provider>
    
}