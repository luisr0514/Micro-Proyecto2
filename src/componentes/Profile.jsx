
import Navbar from './navegación/Navbar'
import { useUser } from '../context/user'

export default function Profile () {
  const user = useUser()
  return (
    <div>
      <Navbar/>
      <h1>PERFIL DE USUARIO</h1>
    </div>
  )
}

// export default Profile

