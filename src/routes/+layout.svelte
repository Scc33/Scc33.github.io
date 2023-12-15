<script>
  import Footer from "../components/Footer/Footer.svelte";
  import Header from "../components/Header/Header.svelte";
  import "../app.css";
  let y;
</script>

<div
  class="container relative flex flex-col max-w-[1600px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
  <Header {y} />
  <slot />
  <Footer />
</div>
<svelte:window bind:scrollY={y} />
