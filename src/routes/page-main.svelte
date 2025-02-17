<script lang="ts">
    import Aboutme from "./aboutme.svelte";
    import Artigos from "./artigos.svelte";
</script>

<main>
    <div>
        <div id="article-div">
        <Artigos/>
        </div>
    </div>
    <Aboutme/>
</main>


<style>
   
    main{
        display: flex;
        flex-direction: row;
        height: 300px;
    }
    main div{
        flex: 1;
    }
    #article-div{
        background-color: lightgray;
        max-width: 500px;
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
        border-radius: 10px 10px 10px 10px;
        align-content: center;
    }
</style>
