import { createContext, useContext } from "react";
/**@type {React.Context<impor{'firebase/auth'}.User|null>} */

export const userContext = createContext(null)

export function useUser(){
    const user =useContext(userContext);
    return user
}