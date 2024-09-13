<script>
  export let data
</script>

<main>
  <a class="return" href="/squad/{data.persons[0].squad_id}">Return</a>
  <div class="pokeball"></div>
  <article class="card">
    <h1>{data.persons[0].name} {data.persons[0].prefix} {data.persons[0].surname}</h1>
    <div class="profile-picture-container">
      <img class="profile-picture" src="{data.persons[0].avatar}" alt="{data.persons[0].name} {data.persons[0].prefix} {data.persons[0].surname}" width="100" height="100">
    </div>
    <div class="info-container">
      <div class="nickname-container">
        <img class="energy" src="http://res.cloudinary.com/bpettis/image/upload/v1516916046/firetype_otgmwq.png" alt="Fire Energy Type Symbol" width="20" height="20">
        <p class="nickname">{data.persons[0].nickname}</p>
      </div>
      <div class="github-container">
        <img class="energy" src="http://res.cloudinary.com/bpettis/image/upload/v1516916049/normaltype_ztufzq.png" alt="Normal Energy Type Symbol" width="20" height="20">
        <p class="github">{data.persons[0].github_handle}</p>
      </div>
      <div class="github-container">
        <img class="energy" src="http://res.cloudinary.com/bpettis/image/upload/v1516916052/watertype_nkics0.png" alt="Water Energy Type Symbol" width="20" height="20">
        <a class="website" href="{data.persons[0].website}" target="_blank">Website</a>
      </div>
    </div>
  </article>
</main>

<style>
  main {
  display: grid;
  place-items: center;
  height: 100vh;
  background: tan;
  }

  .return {
    color: navy;
    position: absolute;
    left: 50px;
    top: 50px;
    text-decoration: none;
  }

  .card {
    height: 400px;
    width: 250px;
    background-image: url(https://img00.deviantart.net/0614/i/2012/106/a/e/classic_pkmn_tcg_texture_pack_by_flamingclaw-d4wcj31.png);
    background-size: cover;
    flex-direction: column;
    gap: 20px;
    display: flex;
    animation: appear 0.5s 6s forwards;
    visibility: hidden;
    border: 10px solid #ffe50a;
    border-radius: 15px;
    padding: 20px;
  }

  @keyframes appear {
    from {
      visibility: none;
    }
    to {
      visibility: visible;
    }
  }

  h1 {
    text-align: center;
  }

  .profile-picture-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border: #ffe50a 4px solid;
    align-self: center;
  }

  .profile-picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info-container > div {
    display: flex;
    gap: 10px;   
    align-items: center; 
  }

  .info-container > div > p,
  .info-container > div > a {
    font-size: 20px;
    color: black;
    font-weight: 700;
  }

  a.website {
    text-decoration: none;
    color: navy;
  }

.pokeball {
  display: block;
  width: 200px;
  height: 200px;
  position: absolute;
  background: radial-gradient(
      white 16px,
      black 17px 18px,
      white 19px 24px,
      black 25px 32px,
      transparent 33px
    ),
    linear-gradient(to bottom, red 0 80px, black 81px 96px, white 97px 100%);
  border-radius: 50%;
  border: 8px solid black;
  animation: fall 0.5s,
    shake 1.25s 1.5s 3,
    catch 0.5s 5.25s forwards;
  }

  @keyframes shake {
    0% {
      transform: translateX(0) rotate(0);
    }
    20% {
      transform: translateX(-10px) rotate(-20deg);
    }
    30% {
      transform: translateX(10px) rotate(20deg);
    }
    50% {
      transform: translateX(-10px) rotate(-10deg);
    }
    60% {
      transform: translateX(10px) rotate(10deg);
    }
    100% {
      transform: translateX(0) rotate(0);
    }
  }
  @keyframes fall {
    0% {
      transform: translateY(-200%);
    }
    60% {
      transform: translateY(0);
    }
    80% {
      transform: translateY(-10%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes catch {
    to {
      filter: brightness(0.8);
      display: none;
    }
  }

</style>