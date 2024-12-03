import { db } from "@/firebase/config";
import { GameData } from "@/types/GameData";
import { collection, getDocs } from "firebase/firestore";

async function GetExperience(universeId: string, trendingType: string): Promise<GameData | null> {
    const gameRef = collection(db, trendingType);
    const gamesSnapshot = await getDocs(gameRef);

    for (const doc of gamesSnapshot.docs) {
        const data = doc.data();
        if (data.universeId === universeId) {
            return data as GameData; 
        }
    }
    return null;
}

export default GetExperience;