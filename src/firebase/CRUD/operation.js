import { database } from "../firebase";
import { ref, set, push, get } from "firebase/database";

const addLike = (like) => {
  const dbRef = ref(database, "portfolio/likes"); // Path in the database
  set(dbRef, {
    like: like+1
  })
  .then(() => console.log("Data written successfully!"))
  .catch((error) => console.error("Error writing data:", error));
};

const removeLike = (like) => {
  const dbRef = ref(database, "portfolio/likes"); // Path in the database
  set(dbRef, {
    like:like-1
  })
  .then(() => console.log("Data written successfully!"))
  .catch((error) => console.error("Error writing data:", error));
};



export {addLike, removeLike};


