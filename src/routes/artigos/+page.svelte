<script lang="ts">
    export let data; // Receive the fetched data as a prop
    import { page } from '$app/stores';
    // Since we returned { posts } from load, extract posts from data.
    const { posts } = data;
    const indexParam = $page.url.searchParams.get('index');
    let index = indexParam ? parseInt(indexParam) : null; // Convert to integer or set to null if not present
</script>

{#if index !== null && posts[index]}
        <h2>{posts[index].title}</h2>
        <p>{posts[index].article}</p>
{:else}
    <p>No article found.</p>
{/if}

