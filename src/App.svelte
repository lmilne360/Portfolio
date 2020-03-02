<script>
  import { fade, fly } from "svelte/transition";
  import { onMount } from "svelte";

  import HomeSection from "./HomeSection.svelte";
  import AboutSection from "./AboutSection.svelte";
  import ProjectsSection from "./ProjectsSection.svelte";
  import Section from "./Section.svelte";
  import Menu from "./Menu.svelte";
  import SkillsSection from "./SkillsSection.svelte";
  import ContactSection from "./ContactSection.svelte";

  let selected = 'home';

  function menuSelectHandler(event) {
    selected = event.detail.item;
  }
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i&display=swap"
    rel="stylesheet" />

  <link 
    href="https://fonts.googleapis.com/css?family=Oswald:400,500,600,700&display=swap" 
    rel="stylesheet" />

  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
    integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
    crossorigin="anonymous" />
            
</svelte:head>

<main>
  <Menu on:select={menuSelectHandler}/>
  {#if selected === 'home'}
    <Section type="home">
      <HomeSection />
    </Section>
  {/if}

  {#if selected === 'about'}
    <Section>
      <AboutSection />
    </Section>
  {/if}
  
  {#if selected === 'projects'}
    <Section>
      <ProjectsSection />
    </Section>
  {/if}

  {#if selected === 'skills'}
    <Section>
      <SkillsSection />
    </Section>
  {/if}

  {#if selected === 'contact'}
    <Section type='contact'>
      <ContactSection />
    </Section>
  {/if}
  
</main>

<style>
  :global(body) {
    padding: 0px;
  }

  @media only screen and (min-width: 1024px) {
    :global(body) {
      overflow: hidden;
    }
  }

  main {
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    font-family: "Roboto", sans-serif;
    max-width: 1280px;
  }
</style>