import { db } from "./firebase"; // Ensure the path is correct
import { collection, getDocs } from 'firebase/firestore';
  
    export async function load() {
      try {
        const querySnapshot = await getDocs(collection(db, 'artigos')); // Ensure 'artigos' is the correct collection name
        const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
  
        return {
         posts
        };
      } catch (error) {
        console.error("Error fetching data: ", error);
        return {
            posts: []
        };
      }
    }

