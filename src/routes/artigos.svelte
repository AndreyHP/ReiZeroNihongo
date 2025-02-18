<script lang="ts">
    import { base } from "$app/paths";
    let {posts} = $props();
</script>



<div style="text-align: center; margin-left: auto; margin-right: auto;">
{#each posts.posts as post,index}
   <div>
        <a data-sveltekit-preload-data="hover" href="{base}/artigos?index={index}">
            <p>{post.title}</p>
        </a>
    </div>
    <div>
        <article>
                {post.summary}
        </article>
    </div>

{/each}
</div>
