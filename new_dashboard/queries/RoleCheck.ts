import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

export default async function RoleCheck(email:string){
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data().role;
    } else {
        console.log("No such document!");
        return null;
    }
}