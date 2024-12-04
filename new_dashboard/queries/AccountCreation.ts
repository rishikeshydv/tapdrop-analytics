import { db } from "@/firebase/config";
import { setDoc, doc } from "firebase/firestore";

export default async function AccountCreation(email: string, password: string) {
    const docRef = doc(db, "users",email);
    const adminUsers = ["cp@tapdroprb.com","shivani@tapdroprb.com","Lou@tapdroprb.com","Adi@tapdroprb.com","rishikeshadh4@gmail.com"]
    const role = adminUsers.includes(email) ? "admin" : "user";
    const user = {
        email: email,
        password: password,
        role: role,
    }
    await setDoc(docRef, user);
    console.log("Document written with ID: ", docRef.id);
}