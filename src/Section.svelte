<script>
  import {fade, fly} from "svelte/transition";
  export let type = "";
  $: typeClass = type !== "" ? " " + type : "";
</script>

<div class="section{typeClass}" in:fade>
  <div class="section__content">
    <slot />
  </div>
</div>

<style>
  .section {
    display: flex;
    padding: 25px;
    
  }

  .section__content{
    display: flex;
    flex-flow: column;
    position: relative;
    max-width: 900px;
  }

  @media only screen and (min-width: 1024px) {
   .section{
    max-width: 800px;
    margin-top: 50%;
    transform: translateY(-50%);
   }
  }

  .contact .section__content{
    width: 100%;
  }

  .home {
    height: 100vh;
    padding: 0px;
    text-align: center;
    margin: auto;
    align-items: center;
    letter-spacing: 1px;
    margin-top: auto;
    transform: translateY(0%);
  }
</style>