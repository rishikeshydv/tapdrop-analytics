import { db } from "@/firebase/config";
import { GameData } from "@/types/GameData";
import { collection, getDocs } from "firebase/firestore";

const GetTopEarning = async (category:string) => {
    const ticketRef = collection(db, category);
    const ticketSnapshot = await getDocs(ticketRef);
    const tickets:GameData[] = [];
    ticketSnapshot.forEach((doc) => {
        const data = doc.data();
        tickets.push(data as GameData);
    });
    return tickets;
}

export default GetTopEarning;
