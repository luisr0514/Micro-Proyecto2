import {createBrowserRouter} from 'react-router-dom'
import Login from './componentes/Login'
import Home from './componentes/Home'
import Registro from './componentes/Registro'

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Login/>

    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/registro',
        element: <Registro/>
    }

])
