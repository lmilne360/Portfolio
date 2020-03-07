<script>
  import {fade,fly} from "svelte/transition";

  import {onMount} from "svelte";

  import Card from "./Card.svelte";
  import ProjectsContainer from "./Projects/ProjectsContainer.svelte";

  import {caseStudy, Case} from "./store.js";



  const cards = [
    {
      title: 'Fitness Connection',
      description: 'A web application used to enroll in gym membership',
      links: [
        {
          label: 'CASE STUDY',
          url: '#case-study',
          case: Case.FitCon,
          external: false
        },
         {
          label: 'WEBSITE',
          url: 'https://fitnessconnection.com',
          external: true
        }
      ]
      
    },
    {
       title: 'Money Gram',
      description: 'An international money transfer web application company',
      links: [
        {
          label: 'CASE STUDY',
          url: '#case-study',
          case: Case.MoneyGram,
          external: false
        },
        {
          label: 'WEBSITE',
          url: 'https://www.moneygram.com',
          external: true
        }
      ]
      
    },
    {
      title: 'Canvas ',
      description: 'A Citi Fintech web application for building out products and teams',
      links: [
        {
          label: 'CASE STUDY',
          url: '#case-study',
          case: Case.Canvas,
          external: false
        },
        {
          label: 'WEBSITE',
          url: 'https://canvas.citi.com/',
          external: true
        }
      ]
    }
  ];

  function handleCardSelect(e){
    $caseStudy = e.detail.case;
  }

  let sectionOutroEnd = false;

  onMount(function(){
    if($caseStudy !== '' && !sectionOutroEnd) sectionOutroEnd = true;
  });

</script>
  
  {#if $caseStudy === '' && !sectionOutroEnd}
    <div 
      class="projectsSection__content" 
      transition:fade
      on:outroend="{() => sectionOutroEnd = true}">
      <h2>Projects</h2>
      {#each cards as card}
        <Card {card} on:selectedItem={handleCardSelect}/>
      {/each}
    </div>
  {/if}

  {#if $caseStudy !== '' && sectionOutroEnd}
    <div 
      class="projectsSection__content" 
      transition:fade
      on:outroend="{() => sectionOutroEnd = false}"
    >
      <ProjectsContainer selected={$caseStudy}/>
    </div>
  {/if}


<style>
  h2{
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 1.25rem;
    text-transform: uppercase;
    border-left: 6px solid #333;
    padding-left: 1rem;
    color: #333;
  }
</style>