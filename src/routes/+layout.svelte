<script lang="ts">
	let { children } = $props();
    import { base } from '$app/paths';

</script>
    <header>
        <div id="menu-bar">
        <nav style="display: flex; flex-direction: row;">
            <a href="{base}/" id="home-logo" title="home-logo" aria-label="Voltar para pagina Inicial">
                <img src="./img/mascot-small.png" id="img-logo" alt="アンドレイ">
            </a>
            <p style="margin: 0px; margin-left: 2rem; margin-top: 1rem;">アンドレイ、ゼロから日本語まで</p>
        </nav>
        </div>
    </header>

<style>
    #menu-bar{
        background-color: #73aecc;
        border-radius: 0px 0px 20px 20px;
    }
    
</style>
{@render children()}
