import {createBrowserRouter} from 'react-router-dom'
import Login from './componentes/Login'
import Home from './componentes/Home'

export const router = createBrowserRouter([

    {
        path: '/login',
        element: <Login/>

    },
    {
        path: '/home',
        element: <Home/>
    }

])
