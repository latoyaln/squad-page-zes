<script>
  export let data;
</script>

<main>
  <!-- {#each data.squads as squad}
    <h2><a href="/squad/{squad.id}">Squad {squad.name}</a></h2>
  {/each} -->
  <ul>
    <li id="overview"></li>
    <li id="squad-4">
      <h2><a href="/squad/4">Squad 2C</a></h2>
    </li>
    <li id="squad-5">
      <h2><a href="/squad/5">Squad 2D</a></h2>
    </li>
    <li id="squad-6">
      <h2><a href="/squad/3">Squad overig</a></h2>
    </li>
  </ul>
</main>

<style>
  /* <Copied from static> */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;700&display=swap');

:root {

  /* Colors */
  --bg-color: #265893;
  --color-white: #fff;
  --color-black: #000;
  --yellow-primary: #FFDA27;
  --red-primary: #E03343;
  --blue-primary: #26B7F0;
  --green-primary: #38B39C;

  /* Fonts */
  --font-family: "Montserrat Alternates", sans-serif;
  --font-medium: 500;
  --font-bold: 700;

  /* shadows */
  --shadow-regular: 0px 0px 15px 7.5px rgba(0,0,0,0.25);
}
  /* </Copied from static> */
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
    /* flex-grow: 1; */
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 80%;
    background-color: #000;
    overflow-x: scroll;
    scroll-snap-type: y mandatory;
    list-style: none;
  }

  main ul li:nth-child(1) {
    background-color: var(--yellow-primary);
    height: 100%;
    width: 100%;
    flex: 0 0 100%;
    box-sizing: border-box;
    scroll-snap-align: start;
  }
  main ul li:nth-child(2) {
    background-color: var(--green-primary);
    height: 100%;
    width: 100%;
    flex: 0 0 100%;
    box-sizing: border-box;
    scroll-snap-align: start;
  }
  main ul li:nth-child(3) {
    background-color: var(--red-primary);
    height: 100%;
    width: 100%;
    flex: 0 0 100%;
    box-sizing: border-box;
    scroll-snap-align: start;
  }
  main ul li:nth-child(4) {
    background-color: var(--blue-primary);
    height: 100%;
    width: 100%;
    flex: 0 0 100%;
    box-sizing: border-box;
    scroll-snap-align: start;
  }

</style>
