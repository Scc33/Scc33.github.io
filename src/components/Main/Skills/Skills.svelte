<script>
  export let sectionName;
  export let skillsList;
</script>

<moreInfoSection>
  <section
    id={sectionName}
    class="pb-20 lg:pb-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
  >
    <div
      class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
    >
      <div class="text-large sm:text-xl md:text-2xl">Want more details?</div>
      <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
        A few of my <span class="poppins text-violet-400">{sectionName}</span>.
      </h3>
    </div>
    {#each skillsList as skillCategory}
      <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
        <div class="flex gap-6 sm:gap-8">
          <div class="flex flex-col gap-6 sm:gap-8">
            <h3 class="text-2xl sm:text-3xl md:text-5xl">
              {skillCategory.name}
            </h3>
            <p>
              {#each skillCategory.category as skill, index}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={skill.icon.viewBox}
                  class="h-7 w-7"><path d={skill.icon.path} /></svg
                >
                {skill.name}{#if index < skillCategory.category.length - 1},
                {/if}
              {/each}
            </p>
          </div>
        </div>
      </div>
    {/each}
  </section>
</moreInfoSection>
