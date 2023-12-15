<script>
  import iAm from "./IAmContent";
  import { programmingSkills, techSkills } from "./Skills";
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
      class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
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
  <section
    id="skills"
    class="pb-20 lg:pb-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <div class="text-large sm:text-xl md:text-2xl">Want more details?</div>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A few of my <span class="poppins text-violet-400">skills</span>.
      </h3>
    </div>
    <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
      <div class="flex gap-6 sm:gap-8">
        <div class="flex flex-col gap-6 sm:gap-8">
          <h3 class="text-2xl sm:text-3xl md:text-5xl">
            Programming languages
          </h3>
          <p>
            {#each programmingSkills as skill, index}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={skill.icon.viewBox}
                class="h-7 w-7"><path d={skill.icon.path} /></svg
              >
              {skill.name}{#if index < programmingSkills.length - 1},
              {/if}
            {/each}
          </p>
        </div>
      </div>
      <div class="flex gap-6 sm:gap-8">
        <div class="flex flex-col gap-6 sm:gap-8">
          <h3 class="text-2xl sm:text-3xl md:text-5xl">
            Technologies & Frameworks
          </h3>
          <p>
            {#each techSkills as skill, index}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={skill.icon.viewBox}
                class="h-7 w-7"><path d={skill.icon.path} /></svg
              >
              {skill.name}{#if index < techSkills.length - 1},
              {/if}
            {/each}
          </p>
        </div>
      </div>
      <div class="flex gap-6 sm:gap-8">
        <div class="flex flex-col gap-6 sm:gap-8">
          <h3 class="text-2xl sm:text-3xl md:text-5xl">Hobbies</h3>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="h-7 w-7"
              ><path
                d="M256 32c12.5 0 24.1 6.4 30.8 17L503.4 394.4c5.6 8.9 8.6 19.2 8.6 29.7c0 30.9-25 55.9-55.9 55.9H55.9C25 480 0 455 0 424.1c0-10.5 3-20.8 8.6-29.7L225.2 49c6.6-10.6 18.3-17 30.8-17zm65 192L256 120.4 176.9 246.5l18.3 24.4c6.4 8.5 19.2 8.5 25.6 0l25.6-34.1c6-8.1 15.5-12.8 25.6-12.8h49z"
              /></svg
            >
            Mountain climbing,
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              class="h-7 w-7"
              ><path
                d="M192 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm51.3 182.7L224.2 307l49.7 49.7c9 9 14.1 21.2 14.1 33.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V397.3l-73.9-73.9c-15.8-15.8-22.2-38.6-16.9-60.3l20.4-84c8.3-34.1 42.7-54.9 76.7-46.4c19 4.8 35.6 16.4 46.4 32.7L305.1 208H336V184c0-13.3 10.7-24 24-24s24 10.7 24 24v55.8c0 .1 0 .2 0 .2s0 .2 0 .2V488c0 13.3-10.7 24-24 24s-24-10.7-24-24V272H296.6c-16 0-31-8-39.9-21.4l-13.3-20zM81.1 471.9L117.3 334c3 4.2 6.4 8.2 10.1 11.9l41.9 41.9L142.9 488.1c-4.5 17.1-22 27.3-39.1 22.8s-27.3-22-22.8-39.1zm55.5-346L101.4 266.5c-3 12.1-14.9 19.9-27.2 17.9l-47.9-8c-14-2.3-22.9-16.3-19.2-30L31.9 155c9.5-34.8 41.1-59 77.2-59h4.2c15.6 0 27.1 14.7 23.3 29.8z"
              /></svg
            >
            Hiking,
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="h-7 w-7"
              ><path
                d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z"
              /></svg
            >
            Running,
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              class="h-7 w-7"
              ><path
                d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"
              /></svg
            > Weight lifting
          </p>
        </div>
      </div>
    </div>
  </section>
</main>
