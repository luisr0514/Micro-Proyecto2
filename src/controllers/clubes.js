import {collection, getDocs, getDoc, doc,} from 'firebase/firestore'
import {db} from '../credenciales'

export async function getClubs() {
    try{
        const clubsCollection = collection(db, 'clubes');
        const  clubsDocs = await getDocs(clubsCollection);
        const clubs = clubsDocs.docs.map((club) =>(club.data()));
        return(clubs);
    } catch (error) {
        console.error('Error al obtener los datos de los clubes', error);
        return [];
    }
}


export async function getClub(id) {
    try{
        const clubCollection = collection(db, 'clubes');
        const  clubDoc = await getDoc(doc(clubCollection, id));
        const club = clubDoc.data();
        return club;
    } catch (error) {
        console.error('Error al obtener los datos de los clubes', error);
        return [];
    }
}


export async function getVideogames(id) {
    try{
        const gamesCollection = collection(db, 'juegos');
        const  gamesDocs = await getDocs(gamesCollection, id);
        const games = gamesDocs.docs.map((club) =>(club.data()));
        return(games);
    }catch (error){
        console.error('Error al obtener los datos de los clubes', error);
    }

}




export async function getVideoGameById(titulo) {
    try{
        const gamesCollection = collection(db, 'juegos');
        const gamesDocs = await getDocs(gamesCollection, titulo);
        const games = gamesDocs.docs.map((club) =>(club.data()));
        return games;
    } catch (error) {
        console.error('Error al obtener los datos de los clubes', error);
        return [];
    }

}