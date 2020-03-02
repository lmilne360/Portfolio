<script>
  import { createEventDispatcher } from 'svelte';
  import {fade} from "svelte/transition";
  import {caseStudyContentHover} from "./store.js";

  const dispatch = createEventDispatcher();

  const links = [
    {
      type: 'home',
      label: 'Home',
      selected: false
    },
    {
      type: 'about',
      label: 'About',
      selected: false
    },
    {
      type: 'projects',
      label: 'Projects',
      selected: false
    },
    {
      type: 'skills',
      label: 'Skills',
      selected: false
    },
    {
      type: 'contact',
      label: 'Contact',
      selected: false
    }
  ]
  
  let selected = 'home';
  let selectedEnter = '';
  let show = false;
  let list = links;
  let wWidth;

	function selectHandler(event) {
    if(event.target.dataset.type === undefined) return;
    selected = event.target.dataset.type;
		dispatch('select', { item: event.target.dataset.type });
  }

  function handleMouseEnter(event){
    const type = event.target.dataset.type;
    selectedEnter = type;
  }

  function handleMouseLeave(event){
    const type = event.target.dataset.type;
    selectedEnter = '';
  }

  function handleMobileMenu(event){
    show = !show;
  }

  function handleWindowScroll(event){

    if(wWidth < 1024) return;

    if($caseStudyContentHover) return;

    const {deltaY} = event;
    const isUp = deltaY < 0 ? true : false;

    if(isUp) {
      const selectedIndex = links.findIndex(link => link.type === selected);
      if(selectedIndex !== 0) {
        selected = links[selectedIndex - 1].type;
      }
    }

    if(!isUp) {
      const selectedIndex = links.findIndex(link => link.type === selected);
      if(selectedIndex !== links.length - 1) {
        selected = links[selectedIndex + 1].type;
      }
    }

		dispatch('select', { item: selected  });
    
  }

  $: list = links.map(link => {
      if(selected === link.type) {
        return {
          ...link,
          selected: true
        }
      }

      return link;
    })
</script>

<svelte:window on:wheel={handleWindowScroll} bind:innerWidth={wWidth}/>

<div class="menu__wrapper{show ? ' show' : ' hide'}">
  <div class="menu__content">
    <ul>
      {#each list as item}
        <li on:click={selectHandler} data-type={item.type} on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
          {#if item.selected}
            <i class="fas fa-pray" data-type={item.type}></i>
          {/if}
          {#if item.type === selectedEnter && !item.selected}
            <i class="fas fa-hiking" data-type={item.type}></i>
          {/if}
        {item.label}
        </li>
      {/each}
    </ul>
  </div>
</div>


<div class="menuMobile__wrapper" on:click={handleMobileMenu}>
  {#if show}
    <i class="fas fa-times"></i>
  {:else}
    <i class="fas fa-bars"></i>
  {/if}
  
</div>

<style>
  
  @media only screen and (max-width: 1023px) {
    .menu__wrapper.hide{
     display: none;
    }

    .menu__wrapper.show{
      display: flex;
      flex-flow: column;
      position: fixed;
      background: white;
      z-index: 998;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      right: 25px;
      border-radius: 5px;
      bottom: 90px;
    }

  }

  .menu__wrapper.show ul {
    padding: 0 20px;
  }

  .menu__wrapper ul li{
    font-size: 1rem;
  }

  .menuMobile__wrapper{
    z-index: 999;
    position: fixed;
    bottom: 35px;
    right: 25px;
    font-size: 1.25rem;
    background: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    padding: 10px;
    border-radius: 3px;
    width: 40px;
    text-align: center;
  }

  .menuMobile__wrapper:hover{
    cursor: pointer;
  }

  @media only screen and (min-width: 1024px) {
    .menuMobile__wrapper{
      display: none;
    }
    .menu__wrapper, .menu__wrapper.hide{
      display: flex;
      flex-flow: column;
      position: fixed;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }

    .menu__wrapper ul li {
      font-size: 1.25rem;
    }
  }

  ul{
    list-style: none;
    padding: 20px;
    min-width: 150px;
  }


  ul li{
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    
    margin: 25px auto;
  }

  ul li:hover{
    cursor: pointer;
  }
</style>