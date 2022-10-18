<script lang="ts">
  export let links
</script>

<div class="containerDesktop">
  <div class="logo" />
  <ul class="menu">
    {#each links as link}
      <li>
        <a href={link.node.uri} rel="prefetch">
          {link.node.label}
        </a>
      </li>
    {/each}
    </ul>
</div>

<style>
  .containerDesktop {
    position: sticky;
    top: 0;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 15px;
    padding: 5px;
    margin-top: -10px;
    background: var(--color-bg);
    border-top: 1px solid hsl(var(--color-red-hue), var(--color-red-sat), 10%);
    border-bottom: 1px solid var(--color-bg-dark);
    z-index: 50;
    box-shadow: 0 10px 8px var(--color-shadow);
  }

  .menu {
    display: flex;
    flex-direction: row-reverse;
    gap: 10px;
    align-items: center;
    justify-items: center;
    padding: 0;
    list-style-type: none;
  }

  li {
    padding: 0;

  }
</style>
