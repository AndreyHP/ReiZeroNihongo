import { db } from "../firebase"; // Ensure the path is correct
import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';

    export async function load() {
      try {
        const q = query(collection(db,'artigos'), where('status','==', 'on'),orderBy('data','desc'), limit(10));

        const querySnapshot = await getDocs(q);

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

