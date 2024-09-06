<script>
  export let data
</script>

<main>
  <ul>
    {#each data.persons as person}
        <li>
          <a href="/{person.id}">
            {person.name} {person.prefix} {person.surname}
          </a>
        </li>
    {/each}
  </ul>
</main>

<style>
    ul {
    list-style: none;
    padding:0;
    display:flex;
    flex-direction: column;
    gap:.5rem;
    align-items:start;
  }
</style>