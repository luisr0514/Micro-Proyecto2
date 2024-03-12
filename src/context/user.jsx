import { createContext, useContext } from "react";

/**@type {React.Context<impor{'firebase/auth'}.User|null>} */

export const UserContext = createContext(null)

export function useUser(){
    const user = useContext(UserContext);
    return user
}