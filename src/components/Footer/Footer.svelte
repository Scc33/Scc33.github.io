<script>
  import links from "./Links";
</script>

<footer
  class="p-10 bg-black border-t border-solid border-violet-950 flex flex-col gap-4 sm:gap-8 justify-center items-center"
>
  <div class="flex flex-row flex-wrap gap-6 items-center justify-center">
    {#each links as link}
      <a href={link.url} target="_blank" class="text-violet-400 underline">
        {link.name}
      </a>
    {/each}
  </div>
</footer>
