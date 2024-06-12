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
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10 lg:pl-5"
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
  <div class="grid grid-cols-1 max-w-xl mx-auto pt-20">
    <div
      class="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4"
    >
      <h1
        class="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800"
      >
        2021
      </h1>
      <h1 class="font-semibold text-xl">Software Developer</h1>
      <a href="https://mroads.com" class="text-gray-500">mroads</a>
      <p class="text-gray-600 dark:text-gray-400 my-2">
        Contributed to our flagship product - Panna - which is an AI powered
        candidate interviewing product.
      </p>
    </div>
    <div class="divider-container flex flex-col items-center -mt-2">
      <div class="w-4 h-4 bg-green-500 rounded-full relative z-10">
        <div
          class="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"
        ></div>
      </div>
      <div
        class="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"
      ></div>
    </div>
    <div
      class="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4"
    >
      <h1
        class="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800"
      >
        2021
      </h1>
      <h1 class="font-semibold text-xl">Founder and Developer</h1>
      <a href="https://tailwindmasterkit.com" class="text-gray-500"
        >TailwindMasterKit</a
      >
      <p class="text-gray-600 dark:text-gray-400 my-2">
        Developed a marketplace for tailwind web components (React, HTML and
        Angular) and templates.
      </p>
    </div>
    <div class="divider-container flex flex-col items-center -mt-2">
      <div class="w-4 h-4 bg-green-500 rounded-full relative z-10">
        <div
          class="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"
        ></div>
      </div>
      <div
        class="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"
      ></div>
    </div>
    <div
      class="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4"
    >
      <h1
        class="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800"
      >
        2021
      </h1>
      <h1 class="font-semibold text-xl">Founder and Developer</h1>
      <a href="https://algochurn.com" class="text-gray-500">Algochurn</a>
      <p class="text-gray-600 dark:text-gray-400 my-2">
        Your last moment revision friend right before a Tech coding interview.
        Practice problems and get hired at top Product based companies.
      </p>
    </div>
    <div class="divider-container flex flex-col items-center -mt-2">
      <div class="w-4 h-4 bg-green-500 rounded-full relative z-10">
        <div
          class="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"
        ></div>
      </div>
      <div
        class="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"
      ></div>
    </div>
    <div
      class="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4"
    >
      <h1
        class="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800"
      >
        2019
      </h1>
      <h1 class="font-semibold text-xl">Internship</h1>
      <a href="https://intel.com" class="text-gray-500">Intel Corporation</a>
      <p class="text-gray-600 dark:text-gray-400 my-2">
        Developed pothole detection system with OpenCV and computer vision,
        detects potholes on roads and informs the driver.
      </p>
    </div>
    <div class="divider-container flex flex-col items-center -mt-2">
      <div class="w-4 h-4 bg-green-500 rounded-full relative z-10">
        <div
          class="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"
        ></div>
      </div>
      <div
        class="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"
      ></div>
    </div>
    <div
      class="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4"
    >
      <h1
        class="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800"
      >
        2015
      </h1>
      <h1 class="font-semibold text-xl">High School</h1>
      <a href="https://upes.co.in" class="text-gray-500"
        >Delhi Public School, Jaipur.</a
      >
      <p class="text-gray-600 dark:text-gray-400 my-2">
        Subjects being PCM - I barely survived with 93.6% marks aggregate. Flex
        fridays, fellas.
      </p>
    </div>
  </div>
  <MoreInfoSection sectionName="skills" {skillsList} />
  <MoreInfoSection sectionName="hobbies" skillsList={hobbiesList} />
</main>
