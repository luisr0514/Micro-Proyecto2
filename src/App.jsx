// import { useState } from 'react'
// // importando los modulos de firebase
// import appFirabase from './credenciales'
// import {getAuth, onAuthStateChanged} from 'firebase/auth'
// import './App.css'
// const auth = getAuth(appFirabase)
// //importaat componentes
// import Login from './componentes/Login'
// import Home from './componentes/Home'
 
// function App() {

//   const [usuario, setUsuario] = useState(null)
//   onAuthStateChanged(auth, (usuarioFirebase) => {

//     if (usuarioFirebase) {
//       setUsuario(usuarioFirebase)

      
//     }
//     else
//     {
//       setUsuario(null)
//     }

//   })
  

//   return (
//     <div>
//       {usuario ? <Home correoUsuario = {usuario.email}/> : <Login/>}
//     </div>
//   )
// }

// export default App
