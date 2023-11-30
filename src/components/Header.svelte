<script>
  export let y;

  export let tabs = [
    { name: "About me", link: "#about" },
    { name: "GitHub", link: "https://github.com/Scc33" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/sean-m-coughlin/" },
    { name: "Technical Blog", link: "https://blog.seancoughlin.me" },
    { name: "Personal Blog", link: "https://explores.world" },
  ];
</script>

<header
  class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
    (y > 0
      ? " py-4 bg-slate-950 border-violet-950"
      : " py-6 bg-transparent border-transparent")}
>
  <h1 class="font-medium">
    <b class="font-bold poppins">Sean</b> <span class="">Coughlin</span>
  </h1>
  <div class="sm:flex items-center gap-4 hidden">
    {#each tabs as tab, index}
      <a
        href={tab.link}
        class="duration-200 hover:text-violet-400"
        target={index === 0 ? "" : "_blank"}
      >
        <p>{tab.name}</p>
      </a>
    {/each}
    <button
      class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950"
      aria-label="Resume"
    >
      <a href="Resume.pdf" target="_blank">
        <div
          class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
        />
        <p class="relative z-9">Resume</p>
      </a>
    </button>
  </div>
</header>
