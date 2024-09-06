<script>
  export let data
</script>

<main>
  {#each data.squads as squad}
    <h2><a href="/squad/{squad.id}">Squad {squad.name}</a></h2>
  {/each}
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