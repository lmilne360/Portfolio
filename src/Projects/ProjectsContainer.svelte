<script>
  import {fade,fly} from "svelte/transition";
  import {caseStudy, caseStudyContentHover, Case} from "../store.js";

  export let selected = '';

  function closeCase() {
    $caseStudy = '';
  }
</script>

<div class="caseStudy__wrapper" >
  {#if selected === Case.FitCon}
      <div class="caseStudy__content">
        <h2>Fitness Connection:</h2>
        <p>
          <b>Problem: </b>
          The client had an existing wordpress website that was seperate from the sign up flow. Users were taken to an external site hosted by a 3rd party partner for registration, 
          leading to a high drop off rate and considerable customer loss.

          <!-- Drupal 7 & 8 end-of-life is November 2021,
          we had to upgrade our sites from Drupal 7 to 8 and at the same time be ready for Drupal 9. -->
        </p>
      </div>
  {/if}
  {#if selected === Case.MoneyGram}
      <div class="caseStudy__content">
        <h2>MoneyGram:</h2>
        <p>
          <b>Problem: </b>

          The client website had began to show its age. The design was dull compared and the various flow were needless complex. 
          Initial render of the website was slow leading to high customer drop off.
          Customers had no way of viewing their financial history and would have to go through a repetive process for new transactions.

          
          <!-- 5000+ nodes were being imported every 30 minutes into a Drupal 7 site,
          it would shut down our Purge Queue for Varnish Cache. The data also wasn't getting imported properly,
          there would be missing data, or completely incorrect data at times. 
        </p> -->
      </div>
  {/if}
  {#if selected === Case.Canvas}
    <div class="caseStudy__content">
        <h2>Citi Canvas:</h2>
        <p>
          <b>Problem: </b>
          The client needed a platform that followed the Citi theme which allowed users to easily set up and manage independent projects.
          The platform needed to allow admins the ability to to define their business, team members as well as facilitate the financial aspects of their projects.
          <!-- The client had a list of about 200 new features and bugs that needed to be worked through. -->
        </p>
      </div>
  {/if}
  <div class="close-btn" on:click={ closeCase }>
    <i class="fas fa-times"></i>
    <span>CLOSE</span>
  </div>
</div>

<style>

p{
  font-family: "Roboto", sans-serif;
  line-height: 2.5rem;
  font-size: 1.5rem;
}

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

.close-btn{
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  border: 2px solid #333;
  padding: 5px 10px;
  transition: 250ms ease-in-out background-color;
}

.close-btn span{
  font-family: "Oswald", sans-serif;
  margin-left: 5px;
}

.close-btn .fa-times{
  vertical-align: middle;
}

.close-btn:hover{
  cursor: pointer;
  background-color: rgba(155, 0, 0, 0.3);
}

</style>