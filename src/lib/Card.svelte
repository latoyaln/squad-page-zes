<script>
    export let name;
    export let avatar;
    export let prefix;
    export let surname;
    export let id;
  </script>

<main class="card">
    <section class="card-inner">
      <article class="card-front">
        <img src={avatar} alt="Profile picture of {name}" />
        <a href='/{id}'>
        <h2>{name}</h2>
        </a>
        <h3>{prefix}{surname}</h3>
      </article>
    </section>
  </main>
  

  