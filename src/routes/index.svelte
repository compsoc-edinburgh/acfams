<script>
  import RadioGroup from "../components/RadioGroup.svelte";
  import { flip } from "svelte/animate";
  import { goto } from "@sapper/app";
  import Success from "./success.svelte";
  let name;
  let email;
  let studentNumber;
  let yearOfStudy;
  let degreeProgram;
  let spouseName;
  let bio;
  let eventsPreference;
  let dataConsent;
  let needsMatch;
  const years = [
    { label: "2nd", display: "2nd" },
    { label: "3rd", display: "3rd" },
    { label: "4th", display: "4th" },
    { label: "5th", display: "5th" },
  ];
  let submitting = false;
  const submit = async () => {
    submitting = true;

    const r = await fetch("https://slack-injest.compsoc.workers.dev", {
      method: "POST",

      body: JSON.stringify({
        text: `
*Picture*: ${picture}
*Name*: ${name}
*Email*: ${email}
*Student Number*: ${studentNumber}
*Year of Study*: ${yearOfStudy}
*Degree Program*: ${degreeProgram}
*Needs a spouse*: ${
          needsMatch === "no" ? "Yes" : `No (paired with "${spouseName}")`
        }
*Bio*: ${bio}
*Events*: ${eventsPreference}
        `,
        icon_url: picture,
        username: name,
        attachments: [
          {
            fallback: "JSON",
            color: "good", // Can either be one of 'good', 'warning', 'danger', or any hex color code

            // Fields are displayed in a table on the message
            fields: [
              {
                title: "JSON", // The title may not contain markup and will be escaped for you
                value: JSON.stringify({
                  picture,
                  name,
                  email,
                  studentNumber,
                  yearOfStudy,
                  degreeProgram,
                  needsMatch: needsMatch === "no",
                  spouseName,
                  bio,
                  eventsPreference,
                }),
                short: false, // Optional flag indicating whether the `value` is short enough to be displayed side-by-side with other values
              },
            ],
          },
        ],
      }),
    });
    if (r.ok) {
      submitting = false;
      goto("/success");
    }
  };
  let file;
  let cls;
  let percentage = 0;
  let picture = "";
  const chooseFile = (e) => {
    cls = "border-blue-500";
    console.log(e);
    file.click();
  };
  const dropFile = (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    uploadFile({ target: { files } });
  };
  const uploadFile = async (e) => {
    let file = e.target.files[0];
    if (!file) return;
    const upload = await (
      await fetch("https://image-worker.compsoc.workers.dev", {
        headers: {
          "Content-Type": file.type,
        },
      })
    ).json();
    const reader = new FileReader();
    const xhr = new XMLHttpRequest();
    xhr.upload.addEventListener(
      "progress",
      (e) => {
        if (e.lengthComputable) {
          percentage = Math.round((e.loaded * 100) / e.total);
          console.log(percentage);
        }
      },
      false
    );

    xhr.upload.addEventListener(
      "load",
      (e) => {
        percentage = 100;
        picture = upload.access;
      },
      false
    );
    xhr.open("PUT", upload.signed);
    xhr.setRequestHeader("x-amz-acl", "public-read");
    xhr.setRequestHeader("Content-Type", file.type);
    xhr.overrideMimeType(file.type);
    reader.onload = function (evt) {
      xhr.send(evt.target.result);
    };
    reader.readAsArrayBuffer(file);
  };
  const dragenter = (e) => {
    console.log(e);
    cls = "border-blue-500";
  };

  $: submissionEnabled =
    dataConsent === "yes" &&
    name &&
    picture &&
    email &&
    studentNumber &&
    yearOfStudy &&
    degreeProgram &&
    bio;
</script>

<svelte:head>
  <meta property="og:url" content="https://family.comp-soc.com" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="CompSoc AcFams" />
  <meta property="og:image" content="https://family.comp-soc.com/social.png" />
  <meta property="og:image:alt" content="CompSoc AcFams" />
  <meta property="og:description" content="CompSoc AcFams" />

  <meta name="twitter:card" content="summary" />

  <meta name="twitter:url" content="https://family.comp-soc.com" />
  <meta name="twitter:title" content="CompSoc AcFams" />
  <meta name="twitter:description" content="CompSoc AcFams" />
  <meta name="twitter:image" content="https://family.comp-soc.com/social.png" />
</svelte:head>
<main class="overflow-x-hidden grid justify-center min-h-screen ">
  <div class="self-center">
    <a
      href="/create"
      class="bg-primary text-white text-xl rounded-lg px-4 py-2 ">Deploy a new
      app!</a>
    <p class="text-gray-600 text-sm mt-2 text-center ">
      <a href="/apps" rel="prefetch">View existing</a>
    </p>
  </div>
</main>
{#if submitting}
  <div
    class="fixed w-full h-full top-0 left-0 bg-gray-900 bg-opacity-75 grid
      items-center justify-center align-middle z-20">
    <h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="w-8 h-8 inline-block text-white"
        stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
      <span class="text-2xl ml-2 align-middle text-white">Saving...</span>
    </h2>
  </div>
{/if}
