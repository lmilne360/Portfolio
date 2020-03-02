<script>
  import { fly } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
	
  export let card = {
    links: [
      {
        label: 'CASE STUDY',
        url: '#case-study'
      }
    ],
    title: 'Title Here',
    description: 'Description Here'
  };

  const dispatch = createEventDispatcher();
  
  function handleLinkClicked(e){
    const hashValue = e.target.hash;
    if( hashValue === '#case-study') {
      e.preventDefault();
      const dataCase = e.target.dataset.case;
      dispatch('selectedItem', {
        case: dataCase
      })
    }
  }

</script>

<div class="card">
  <div class="cardContent">
    <span class="cardTitle">{card.title}</span>
    <p>{card.description}</p>
  </div>
  <div class="cardAction">
    {#each card.links as link}
      <a href={link.url} on:click={handleLinkClicked} data-case={link.case}>
        {link.label}
        {#if link.external}
          <i class="fas fa-external-link-alt"></i>
        {/if}
      </a>
    {/each}
  </div>
</div>


<style>
  .fa-external-link-alt{
    margin-left: 2px;
    font-size: 0.6rem;
    vertical-align: top;
  }
  .card .cardAction a{
    color:#498531;
  }

  .card .cardContent p {
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
  }

  .card .cardTitle{
    color: #333;
    font-size: 1.25rem;
    font-weight: 700;
    font-family: "Oswald", sans-serif;
    letter-spacing: 1px;
  }

  .card .cardAction a:not(:first-child){
    margin-left: 20px;
  }

  .card{
    margin-top: 60px;
    margin-bottom: 60px;
    font-size: 1rem;
  }
</style>