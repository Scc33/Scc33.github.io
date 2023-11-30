<script>
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import "../app.css";
  let y;
  let innerHeight = 0;
</script>

<div
  class="container relative flex flex-col max-w-[1600px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
  <Header {y} {innerHeight} />
  <slot />
  <Footer />
</div>
<svelte:window bind:scrollY={y} bind:innerHeight />
