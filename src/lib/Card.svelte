<script>
    export let name;
    export let avatar;
    export let prefix;
    export let surname;
    export let id;
    export let color;
  </script>

<!-- <main class="card">
    <section class="card-inner">
      <article class="card-front">
        <img 
        src={avatar} 
        alt="Profile picture of {name}" 
        onerror="this.onerror=null;this.src='/pikachu.webp';" />
        <a href='/{id}'>
        <h2>{name}</h2>
        </a>
        <h3>{prefix}{surname}</h3>
      </article>
      <div class="card-back">
        <img src="/pokemon.png" alt="Pokémon background" />
      </div>
    </section>
  </main> -->
  <main class="card {color}">
    <section class="card-inner">
      <article class="card-front">
        <img 
        src={avatar} 
        alt="Profile picture of {name}" 
        onerror="this.onerror=null;this.src='/pikachu.webp';" />
        <a href='/{id}'>
        <h2>{name}</h2>
        </a>
        <h3>{prefix}{surname}</h3>
      </article>
    </section>
</main>
  
  <style>
    .card {
    width: 200px;
    height: 300px;
    perspective: 1000px;
    margin: .5em;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    /* background: linear-gradient(to bottom right, #46a95c, #92e2a4, #56a267, #0c651f, #59bd6e, #a7eeb6); */
    box-shadow: 0 4px 20px #000601;
    border: solid 5px rgba(2, 63, 11, 0.397);
    transition: transform 0.6s ease, box-shadow 0.6s ease, margin 0.6s ease;
    padding: .5em;
    }
  
    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transform-style: preserve-3d;
      cursor: pointer;
      transition: transform 0.6s ease;
    }
  
    .card:hover {
      transform: scale(1.2);
      z-index: 2;
      margin: 2em;
    }
  
    .card:hover .card-inner {
      transform: rotateY(180deg);
    }
  
    .card-front {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 0.5em;
    }
  
    .card-front {
      background-color: rgba(255, 255, 255, 0.167);
      color: black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 1;
    }
  
    img {
      width: 180px;
      height: 150px;
      object-fit: cover;
      margin-bottom: 10px;
      border: solid 5px rgba(224, 235, 10, 0.397);
      box-shadow: 0 4px 20px #01480a9b;
    }
    .card.red {
    background: linear-gradient(to bottom right, #a90120, #e009aa, #cc1332, #8f080a, #cf034e, #ef6d92);
  }
  
  .card.blue {
    background: linear-gradient(to bottom right, #1609cc, #2648d0, #722af8, #220680, #484bf3, #5dd3ee);
  }
  
  .card.green {
    background: linear-gradient(to bottom right, #46a95c, #92e2a4, #56a267, #0c651f, #59bd6e, #a7eeb6);
  }
  
  .card.yellow {
    background: linear-gradient(to bottom right, #ede901, #f6f876, #dcd926, #938a04, #beb404, #f5e76d);
  }

  </style>
  