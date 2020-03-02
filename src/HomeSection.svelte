<script>
  import { fade, fly } from "svelte/transition";
</script>

<div>
  <h1>Laurent Milne</h1>
</div>

<style>
  h1 {
    font-size: 50px;
    font-weight: 700;
  }

  @media only screen and (min-width: 426px) {
    h1 {
      font-size: 60px;
    }
  }

  @media only screen and (min-width: 769px) {
    h1 {
      font-size: 70px;
    }
  }

  @media only screen and (min-width: 1024px) {
    h1 {
      font-size: 90px;
    }
  }
</style>