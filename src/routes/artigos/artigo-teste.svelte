<script lang="ts" context="module">
    import { db } from "../firebase.svelte"; // Ensure the path is correct
    import { collection, getDocs } from 'firebase/firestore';
  
    export async function load() {
      try {
        const querySnapshot = await getDocs(collection(db, 'artigos')); // Ensure 'artigos' is the correct collection name
        const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  
        return {
          props: {
            data
          }
        };
      } catch (error) {
        console.error("Error fetching data: ", error);
        return {
          props: {
            data: [] // Return an empty array in case of error
          }
        };
      }
    }
  </script>
  
  <script lang="ts">
    export let data; // Receive the fetched data as a prop
  </script>
  
  <h1>Data from Firebase</h1>
  <ul>
    {#each data as item}
      <li>{item.id}: {JSON.stringify(item)}</li>
    {/each}
  </ul>