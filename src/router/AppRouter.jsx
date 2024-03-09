import { Route, Routes } from "react-router-dom"
import { Navbar } from "../componentes/Navbar"
import { HomePage, LoginPage, RegisterPage } from "../pages";

export const AppRouter = () =>{

    return(
        <Routes>
            <Route path='/' element={<Navbar />}>
                <Route index element={<HomePage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='register' element={<RegisterPage />} />
            </Route>
        </Routes>
    )
}