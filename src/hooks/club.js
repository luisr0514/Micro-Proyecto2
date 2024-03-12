import { useEffect, useState } from "react";
import { getClubs, getClub } from "../controllers/clubes";

export function UseClubs(){
    const [clubs, setClubs]= useState(null);
    
    useEffect(() => {
      const load = async () => {
        const clubs = await getClubs();
        setClubs(clubs);
      };
      load();
    }, [])
    return clubs;
}

export function UseClub(id){
  const [club, setClub]= useState(null);
  
  useEffect(() => {
    const load = async () => {
      const club = await getClub(id);
      setClub(club);
    };
    load();
  }, [id])
  return club;
}

