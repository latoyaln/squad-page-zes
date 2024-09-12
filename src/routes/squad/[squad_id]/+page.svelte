<script>
  export let data
  import Card from "$lib/Card.svelte"
</script>

<main>
  <h1> Squad </h1>
  <section class ="cards-container">
    {#each data.persons as person}
        <Card
            name = {person.name}
            avatar = {person.avatar}
            prefix = {person.prefix}
            surname = {person.surname}
            id = {person.id}
        />
    {/each}
  </section>
</main>

<style>
    .cards-container{
    padding:0;
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap:.5rem;
    justify-content: center;
  }
</style>