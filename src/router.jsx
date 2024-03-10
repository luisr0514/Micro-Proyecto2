import {createBrowserRouter} from 'react-router-dom'
import Login from './componentes/Login'
import Home from './componentes/Home'
import ClubList from './componentes/ClubList'
import Search from './componentes/Search'
import Profile from './componentes/Profile'

import Registro from './componentes/Registro'

export const router = createBrowserRouter([

    {
        path: '/login',
        element: <Login/>

    },
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/list',
        element: <ClubList/>
    },
    {
        path: '/search',
        element: <Search/>
    },
    {
        path: '/profile',
        element: <Profile/>
    },
    {
        path: '/registro',
        element: <Registro/>
    },

])

