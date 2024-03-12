import { useEffect, useState } from "react";
import { getVideoGameById} from "../controllers/clubes";

export default function ShowVideogame(titulo){
    const [videogame, setVideogame]= useState(null);
    
    useEffect(() => {
        const load = async () => {
        const videogame = await getVideoGameById(titulo);
        setVideogame(videogame);
      };
      load();
    }, [titulo])
    return videogame;
}