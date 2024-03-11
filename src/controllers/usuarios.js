import {collection, addDoc} from 'firebase/firestore'
import {auth, db} from '../credenciales'
import { signOut } from "firebase/auth";

export async function crearUsuario({nombre, apellido, correo, password}) {
    const usersCollection = collection(db, 'usuarios')
    const  data = {nombre, apellido, correo, password}
    await addDoc(usersCollection, data)

}

export async function logOut(){
    await signOut(auth);
    console.log("Sesion cerrada")

}