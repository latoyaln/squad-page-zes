<script>
  export let data
  import Card from "$lib/Card.svelte"
</script>

<main>
  <span>
  <h1> Squad </h1>
  <img src="/bulbasaur.webp" alt = "Bulbasaur" />
  </span>
  <section class ="cards-container">
    {#each data.persons as person, index}
        <Card
            name = {person.name}
            avatar = {person.avatar}
            prefix = {person.prefix}
            surname = {person.surname}
            id = {person.id}
            color = {index % 4 === 0 ? 'red' : index % 4 === 1 ? 'blue' : index % 4 === 2 ? 'green' : 'yellow'}
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
  :global(body){
    background-color: #78aa90;
    margin: 0;
  }
  h1{
    color: #ecdc4e;
  font-weight: 900;
  text-transform: uppercase;
  font-size: clamp(3rem, 10vw, 6rem);
  line-height: 0.75em;
  text-align: center;
  text-shadow: 3px 1px 1px #0526429c, 2px 2px 1px #0c07a9, 4px 2px 1px #050b5a, 3px 3px 1px #165bfb, 5px 3px 1px #0b0498, 4px 4px 1px #0080ff, 6px 4px 1px #1f0259, 5px 5px 1px #165bfb, 7px 5px 1px #09017a, 6px 6px 1px #1e044e, 8px 6px 1px #04046b, 7px 7px 1px #165bfb, 9px 7px 1px #0808c5;
    }
  span{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: relative;
    height: 10em;
    background-image: linear-gradient(#a7d2ba, #578474);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 9vw));
    & img{
      width: 30%;
        height: auto;
      
    }
  }

</style>