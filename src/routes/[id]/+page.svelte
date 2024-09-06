<script>
  export let data
</script>

<main>
  {#each data.persons as person}
    <h1>{person.name}</h1>
    <h2>{person.id}</h2>
  {/each}
</main>