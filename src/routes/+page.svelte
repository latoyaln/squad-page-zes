<script>
  export let data
</script>

<main>
  <!-- {#each data.squads as squad}
    <h2><a href="/squad/{squad.id}">Squad {squad.name}</a></h2>
  {/each} -->
  <h2><a href="/squad/4">Squad 2C</a></h2>
  <h2><a href="/squad/5">Squad 2D</a></h2>
  <h2><a href="/squad/3">Squad overig</a></h2>
</main>

<style>
  a {
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:.5rem;
    margin-bottom: 1rem;
    border-radius: .25rem;
    border:1px solid var(--primary);
    overflow:hidden;
    padding:0 0 .25rem;
    text-decoration:none;
  }
  a:hover {
    background-color: red;
  }
</style>