<script lang="ts">
  import { onMount } from "svelte"
  import MenuDesktop from "./MenuDesktop.svelte"

  export let links:any
  let isMobile: boolean
  function handleResize() {
    console.log('drer')
    isMobile = window.innerWidth <= 600
  }

  onMount(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
  })
</script>

{#if isMobile}
  <p>menu mobile in progress</p>
{:else}
  <MenuDesktop links={links}/>
{/if}
