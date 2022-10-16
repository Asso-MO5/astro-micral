<script>
  import { onMount } from "svelte"

  onMount(async () => {
    //DISQUS UNIVERSAL CODE
    ;(function () {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement("script")
      s.src = "https://micral.disqus.com/embed.js"
      s.setAttribute("data-timestamp", +new Date())
      ;(d.head || d.body).appendChild(s)
    })()
  })

</script>

<div class="container">
  <div id="disqus_thread" />
</div>

<style>
  .container {
    border-top: var(--border);
    width: 100%;
    max-width: 60ch;
  }
</style>
