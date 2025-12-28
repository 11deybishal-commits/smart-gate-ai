import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

export async function addGateLog(logData) {
  await addDoc(collection(db, "gateLogs"), {
    ...logData,
    timestamp: serverTimestamp(),
  });
}
