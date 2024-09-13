<script>
  export let data
</script>

<main>
  <div class="kaartjes-container">
    {#if data.persons}
        {#each data.persons as person}
        <div class="kaartje-container">
            <div class="kaartje">
                <div class="kaartje-front">
                </div>
                <div class="kaartje-back">
                  <h1>{person.name} {person.prefix} {person.surname}</h1>
                  <a href="/{person.id}" class="button-unlock">Unlock Me
                  </a>
                  </div>
                </div>
            </div>
            {/each}
        {:else}
            <p>No data available</p>
        {/if}
    </div>
</main>

<style>
.kaartjes-container {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  padding: 20px;
}

.kaartje-container {
  perspective: 1000px;
  width: 250px;
  height: 300px;
  box-sizing: border-box;
}

.button-unlock{
  display: inline-block;
  padding: 10px 20px;
  background-color: #ff0000; 
  color: white; 
  text-align: center;
  text-decoration: none; 
  outline: 2px solid black;
  font-size: 16px;
  cursor: pointer;
}
.kaartje {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointer;
}

.kaartje:hover {
  transform: rotateY(180deg);
}

.kaartje-front,
.kaartje-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
}

.kaartje-front {
  background-image: url('/61vOBvbsYJL._AC_UF1000,1000_QL80_.jpg');
  background-size: cover;
  height: 330px;
  background-position: center;
  z-index: 1;
}

.kaartje-back {
  background: rgb(89, 51, 225);
  display: flex;
  height: 330px;
  font-family: var(--font-family);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgb(255, 255, 255);
  transform: rotateY(180deg);
  text-align: center;
  z-index: 2;
}

.kaartje-back h1 {
  font-size: 1.2em;
  margin-bottom: 20px;
}

</style>
