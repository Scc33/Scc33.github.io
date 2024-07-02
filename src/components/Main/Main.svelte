<script>
  import iAm from "../../data/IAmContent";
  import MoreInfoSection from "./Skills/Skills.svelte";
  import skillsList from "../../data/Skills";
  import hobbiesList from "../../data/Hobbies";
</script>

<main class="flex flex-col flex-1 p-4 hidescroll">
  <style>
    svg {
      fill: #ffffff;
      display: inline-block;
      padding-left: 0.25rem;
      padding-right: 0.25rem;
    }
  </style>
  <section
    id="introPage"
    class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
  >
    <div
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10 lg:ml-8"
    >
      <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
        Hi! I'm <span class="poppins text-violet-400">Sean</span>
        Coughlin
        <br />Full Stack
        <span class="poppins text-violet-400">Developer</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl">
        My <span class="text-violet-400"> favorite tech</span> includes JavaScript/React
        and Java/Spring Boot!
      </p>
    </div>
    <div class="relative shadow-2xl grid place-items-center">
      <img
        src={"images/profile.webp"}
        alt="My profile"
        class="object-cover z-[2] max-h-[70vh]"
      />
    </div>
  </section>
  <section
    id="about"
    class="pb-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <div class="text-large sm:text-xl md:text-2xl">Want to know more?</div>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A bit <span class="poppins text-violet-400">about</span> me.
      </h3>
    </div>
    <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
      I am . . .
    </p>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      {#each iAm as about, index}
        <div class="flex gap-6 sm:gap-8">
          <p
            class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
          >
            0{index + 1}
          </p>
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">
              {about.name}
            </h3>
            <p>{about.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </section>
  <MoreInfoSection sectionName="skills" {skillsList} />
  <MoreInfoSection sectionName="hobbies" skillsList={hobbiesList} />
</main>
