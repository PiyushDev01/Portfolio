import { database } from "../firebase";
import { ref, set, get, update } from "firebase/database";

const addLike = async () => {
  try {
    const dbRef = ref(database, "portfolio/likes");
    const snapshot = await get(dbRef);
    
    if (snapshot.exists()) {
      const currentLikes = snapshot.val().like || 0;
      await update(dbRef, { like: currentLikes + 1 });
    } else {
      await set(dbRef, { like: 1 });
    }
    console.log("Like added successfully!");
  } catch (error) {
    console.error("Error adding like:", error);
    throw error;
  }
};

const removeLike = async () => {
  try {
    const dbRef = ref(database, "portfolio/likes");
    const snapshot = await get(dbRef);
    
    if (snapshot.exists()) {
      const currentLikes = snapshot.val().like || 0;
      await update(dbRef, { like: Math.max(0, currentLikes - 1) });
    } else {
      await set(dbRef, { like: 0 });
    }
    console.log("Like removed successfully!");
  } catch (error) {
    console.error("Error removing like:", error);
    throw error;
  }
};

export { addLike, removeLike };


