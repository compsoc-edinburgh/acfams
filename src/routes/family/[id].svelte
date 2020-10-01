<script>
  import { stores } from "@sapper/app";
  const { preloading, page, session } = stores();
  import { onMount } from "svelte";
  let family = null;
  onMount(async () => {
    family = await fetch(
      `https://cdn.comp-soc.com/families/${$page.params.id}.json`
    ).then((r) => r.json());
  });
</script>

<main class="overflow-x-hidden">
  <h1 class="font-display text-2xl sm:text-4xl text-center text-primary mt-20">
    Ac<span class="text-gray-900">Fams</span>
  </h1>
  <h2 class="text-center p-4"><code>{$page.params.id}</code></h2>
  {#if family}
    <h2 class="text-2xl p-4 font-display">Parents</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <section
        class="p-4 pt-4 max-w-2xl mx-auto lg:m-0
           w-full lg:ml-auto">
        <img
          class="w-64 h-64 object-cover mx-auto mb-4 rounded-full shadow-md"
          src={family.parents[0].picture} />
        <h2 class="text-lg ">
          Hi! I'm
          <strong>{family.parents[0].name}</strong>, a
          <strong>{family.parents[0].yearOfStudy}</strong>
          year studying
          <strong>{family.parents[0].degreeProgram}</strong>. You can contact me
          at
          <strong><a
              class=" underline"
              href="mailto:{family.parents[0].email}">{family.parents[0].email}</a></strong>
        </h2>
        <div class="text-lg mt-4 whitespace-pre-wrap">
          {family.parents[0].bio}
        </div>
        <hr class=" lg:hidden mt-4 h-1 bg-gray-400 border-none" />
      </section>

      <section class="p-4 pt-4 max-w-2xl mx-auto lg:m-0
      w-full lg:mr-auto">
        <img
          class="w-64 h-64 object-cover mx-auto mb-4 rounded-full shadow-md"
          src={family.parents[1].picture} />
        <h2 class="text-lg ">
          Hi! I'm
          <strong>{family.parents[1].name}</strong>, a
          <strong>{family.parents[1].yearOfStudy}</strong>
          year studying
          <strong>{family.parents[1].degreeProgram}</strong>. You can contact me
          at
          <strong><a
              class=" underline"
              href="mailto:{family.parents[1].email}">{family.parents[1].email}</a></strong>
        </h2>
        <div class="text-lg mt-4 whitespace-pre-wrap">
          {family.parents[1].bio}
        </div>
      </section>
    </div>
    <h2 class="text-2xl p-4 font-display">Children</h2>

    <div class="grid grid-cols-1 lg:grid-cols-2">
      <section
        class="p-4 pt-4 max-w-2xl mx-auto lg:m-0
           w-full lg:ml-auto">
        <img
          class="w-64 h-64 object-cover mx-auto mb-4 rounded-full shadow-md"
          src={family.children[0].picture} />
        <h2 class="text-lg ">
          Hi! I'm
          <strong>{family.children[0].name}</strong>, a
          <strong>1st</strong>
          year studying
          <strong>{family.children[0].degreeProgram}</strong>. You can contact
          me at
          <strong><a
              class=" underline"
              href="mailto:{family.children[0].email}">{family.children[0].email}</a></strong>
        </h2>
        <div class="text-lg mt-4 whitespace-pre-wrap">
          {family.children[0].bio}
        </div>
        <hr class=" lg:hidden mt-4 h-1 bg-gray-400 border-none" />
      </section>
      <section class="p-4 pt-4 max-w-2xl mx-auto lg:m-0
      w-full lg:mr-auto">
        <img
          class="w-64 h-64 object-cover mx-auto mb-4 rounded-full shadow-md"
          src={family.children[1].picture} />
        <h2 class="text-lg ">
          Hi! I'm
          <strong>{family.children[1].name}</strong>, a
          <strong>1st</strong>
          year studying
          <strong>{family.children[1].degreeProgram}</strong>. You can contact
          me at
          <strong><a
              class=" underline"
              href="mailto:{family.children[1].email}">{family.children[1].email}</a></strong>
        </h2>
        <div class="text-lg mt-4 whitespace-pre-wrap">
          {family.children[1].bio}
        </div>
      </section>
    </div>
  {/if}
</main>
{#if !family}
  <div
    class="fixed w-full h-full top-0 left-0 bg-gray-900 bg-opacity-75 grid
        items-center justify-center align-middle z-20">
    <h2>
      <svg
        class="w-8 h-8 inline-block text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
      <span class="text-2xl ml-2 align-middle text-white">Loading...</span>
    </h2>
  </div>
{/if}
