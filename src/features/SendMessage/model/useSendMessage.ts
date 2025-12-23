import { db } from "@/shared/api/firebase";
import { collection, addDoc } from "firebase/firestore";

export const useSendMessage = () => {
  const send = async (text: string) => {
    if (!text) return;
    return await addDoc(collection(db, "messages"), { text, date: new Date() });
  };
  return { send };
};