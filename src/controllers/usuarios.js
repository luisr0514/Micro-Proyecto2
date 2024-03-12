import {collection, addDoc} from 'firebase/firestore'
import {auth, db} from '../credenciales'
import { signOut } from "firebase/auth";
import { Query, where } from 'firebase/firestore';
import { useUser } from '../context/user';
import { useState, useEffect, useContext } from 'react';



export async function crearUsuario({nombre, apellido, correo, password}) {
    const usersCollection = collection(db, 'usuarios')
    const  data = {nombre, apellido, correo, password}
    await addDoc(usersCollection, data)

}

export async function logOut(){
    await signOut(auth);
    console.log("Sesion cerrada")

}

// const [correo, setCorreo] = useState("")
