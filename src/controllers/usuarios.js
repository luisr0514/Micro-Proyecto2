    import {collection, addDoc} from 'firebase/firestore'
    import {db} from '../credenciales'
    
    export async function crearUsuario({nombre, apellido, correo, password}) {
        const usersCollection = collection(db, 'usuarios')
        const  data = {nombre, apellido, correo, password}
        await addDoc(usersCollection, data)

    }
