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
        <h2>Drupal 8 Profile:</h2>
        <p>
          <b>Problem: </b>Drupal 7 & 8 end-of-life is November 2021,
          we had to upgrade our sites from Drupal 7 to 8 and at the same time be ready for Drupal 9.
        </p>
      </div>
  {/if}
  {#if selected === Case.MoneyGram}
      <div class="caseStudy__content">
        <h2>Ny.gov Local Page:</h2>
        <p>
          <b>Problem: </b>5000+ nodes were being imported every 30 minutes into a Drupal 7 site,
          it would shut down our Purge Queue for Varnish Cache. The data also wasn't getting imported properly,
          there would be missing data, or completely incorrect data at times. 
        </p>
      </div>
  {/if}
  {#if selected === Case.Canvas}
    <div class="caseStudy__content">
        <h2>Ny.gov and Governor.ny.gov sites:</h2>
        <p>
          <b>Problem: </b>The client had a list of about 200 new features and bugs that needed to be worked through.
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