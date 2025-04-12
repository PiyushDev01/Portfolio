import { database } from "../firebase";
import { ref, set, get } from "firebase/database";

const addLike = (like) => {
  // First get the current value to make sure we're incrementing correctly
  const dbRef = ref(database, "portfolio/likes");
  
  return get(dbRef).then((snapshot) => {
    const newLike = snapshot.exists() ? snapshot.val().like + 1 : 1;
    
    return set(dbRef, {
      like: newLike
    })
    .then(() => console.log("Like added successfully!"))
    .catch((error) => console.error("Error writing data:", error));
  });
};

const removeLike = (like) => {
  // First get the current value to make sure we're decrementing correctly
  const dbRef = ref(database, "portfolio/likes");
  
  return get(dbRef).then((snapshot) => {
    const newLike = snapshot.exists() ? Math.max(0, snapshot.val().like - 1) : 0;
    
    return set(dbRef, {
      like: newLike
    })
    .then(() => console.log("Like removed successfully!"))
    .catch((error) => console.error("Error writing data:", error));
  });
};

export { addLike, removeLike };


