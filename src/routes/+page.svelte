<script>
  export let data;
</script>

<main>
  <!-- {#each data.squads as squad}
    <h2><a href="/squad/{squad.id}">Squad {squad.name}</a></h2>
  {/each} -->
  <ul>
    <li id="overview">
      <article>
        <h2>Need help?</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, sint cupiditate fugiat corrupti alias non minus, cum repudiandae fuga placeat perspiciatis deleniti. Quas aperiam, neque fugit cumque iusto similique quia!
        </p>
      </article>
      <img src="src/lib/img/pikachu.png" alt="">
    </li>

    {#each data.squads as squad}
    <li>
      <article>
        <h2>Squad </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, sint cupiditate fugiat corrupti alias non minus, cum repudiandae fuga placeat perspiciatis deleniti. Quas aperiam, neque fugit cumque iusto similique quia!
        </p>
        <a href="">Squad </a>
      </article>
      <img src="src/lib/img/bulbasaur.png" alt="">
    </li>
    {/each}




    <li id="squad-4">
      <article>
        <h2>Squad 2C</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, sint cupiditate fugiat corrupti alias non minus, cum repudiandae fuga placeat perspiciatis deleniti. Quas aperiam, neque fugit cumque iusto similique quia!
        </p>
        <a href="/squad/4">Squad 2C</a>
      </article>
      <img src="src/lib/img/bulbasaur.png" alt="">
    </li>
    <li id="squad-5">
      <article>
        <h2>Squad 2D</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, sint cupiditate fugiat corrupti alias non minus, cum repudiandae fuga placeat perspiciatis deleniti. Quas aperiam, neque fugit cumque iusto similique quia!
        </p>
        <a href="/squad/5">Squad 2D</a>
      </article>
      <img src="src/lib/img/charmander.png" alt="">
    </li>
    <li id="squad-6">
      <article>
        <h2>Squad overig</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, sint cupiditate fugiat corrupti alias non minus, cum repudiandae fuga placeat perspiciatis deleniti. Quas aperiam, neque fugit cumque iusto similique quia!
        </p>
        <a href="/squad/3">Squad overig</a>
      </article>
      <img src="src/lib/img/squirtle.png" alt="">
    </li>
  </ul>
</main>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  main {
    width: 100%;
    height: 100dvh;
    background-color: var(--bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  main ul {
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 80%;
    background-color: #000;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    list-style: none;
  }

  main ul li {
    height: 100%;
    width: 100%;
    flex: 0 0 100%;
    box-sizing: border-box;
    scroll-snap-align: start;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 2rem 2rem 4rem;
  }

  main ul li article {
    position: relative;
  }
  main ul li article h2 {
    font-family: var(--font-family-alt);
    margin-bottom: 1rem;
    min-width: 200px;
  }

   main ul li article h2::after {
    content: "";
    background-color: var(--color-black);
    width: 100px;
    height: 3px;
    bottom: -3px;
    left: 4.5rem;
    top: 2rem;
    position: absolute;
  }

  main ul li article p {
    max-width: 450px;
    font-family: var(--font-family);
  }

  main ul li:nth-child(1) {
    background-color: var(--yellow-primary);
  }

  main ul li:nth-child(2) {
    background-color: var(--green-primary);
  }

  main ul li:nth-child(3) {
    background-color: var(--red-primary);
  }

  main ul li:nth-child(4) {
    background-color: var(--blue-primary);
  }

</style>
