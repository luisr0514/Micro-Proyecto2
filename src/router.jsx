import {createBrowserRouter} from 'react-router-dom'
import Login from './componentes/Login'

import ClubList from './componentes/ClubList'

import Profile from './componentes/Profile'
import Registro from './componentes/Registro'
import ClubPage from './componentes/ClubPage'
import VideogamePage from './componentes/VideogamePage'
import SearchBar from './componentes/SearchBar'


export const router = createBrowserRouter([

    {
        path: '/',
        element: <Login/>

    },
    {
        path: '/list',
        element: <ClubList/>
    },
    {
        path: '/search',
        element: <SearchBar/>
    },
    {
        path: '/profile',
        element: <Profile/>
    },
    {
        path: '/registro',
        element: <Registro/>
    },
    {
        path: 'list/club/:id',
        element: <ClubPage/>
    },
    {
        path: '/search/videogame/:titulo',
        element: <VideogamePage/>
    }

])

