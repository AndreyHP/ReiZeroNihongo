<script lang="ts">
    import Main from "./page-main.svelte";
    
    export let data; // Receive the fetched data as a prop
    let posts = data;
</script>

<Main {posts}/>
