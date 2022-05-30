const main = document.getElementById("main");
const appAnimes = document.getElementById("appAnimes");
const overlayContent = document.getElementById("overlay-content");


function searchAnimes(event) {
  event.preventDefault();
  let searchKey = document.getElementById("input-search").value
  let url = `https://api.jikan.moe/v3/search/anime?q=${searchKey}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
        appAnimes.innerHTML = showAnime(data.results);
    }) 
    .catch(err => {
        appAnimes.innerHTML = err;
    });
}

function showAnime(data) {
  main.innerHTML = "";
  data.map((anime) => {
    const { title, start_date, image_url, synopsis, mal_id } = anime;
    const animeEL = document.createElement("div");
    animeEL.classList.add("anime");
    animeEL.innerHTML = `
                <img src="${image_url}">
                <div class="anime-info">
                <h3>${title}</h3>
                <span>${(dtFormat = new Date(start_date).getFullYear())}</span>

                <div class="synopsis">
                    <h3>Synopsis</h3>
                    ${synopsis}
                    <br/> 
                    <button class="details" id="${mal_id}">Details</button
                </div> 
                </div>
        `;
    main.appendChild(animeEL);
    document.getElementById(mal_id).addEventListener("click", () => {
      navOverleav(anime);
    });
  });
}

function navOverleav(anime) {
    document.getElementById("overlayNav").style.width = "100%";
    var content = `
    <div class = "anime-poster">
        <img src = "${anime.image_url}">
    </div>
    <div class = "anime-details">
        <h3 class = "anime-title">${anime.title}</h3>
        <ul class = "anime-misc-details">
            <li class = "ano">Ano: ${dtFormat = new Date(anime.start_date).getFullYear()}</li>
            <li class = "rated">Classificação: ${anime.rated}</li>
        </ul>
        <p class = "tipo"><b>Tipo:</b> ${anime.type}</p>
        <p class = "trama"><b>Trama:</b> ${anime.synopsis}</p>
        <p class = "episodio"><b>Episódios:</b> ${anime.episodes}</p>
        <p class = "score"><b>Score: </b>${anime.score}</p>
    </div>
    `;
    overlayContent.innerHTML = content;
}

function openNav() {
  document.getElementById("overlayNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("overlayNav").style.width = "0%";
}
