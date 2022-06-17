const PageAnime = () => {
  return (
    <div className="appAnimes">
        <HeaderTitle />
    </div>
  );
}

const HeaderTitle = () => {
  <FetchApi />
  return ( 
    <div className="anime-search">
      <div className="header">
        <h1><strong>anime</strong>search</h1>
      </div>
      <div className="conatiner-search">
        <form className="form-control">
          <input type="text" name="search" id="input-search" />
          <a href="#" id="link-search" onClick={FetchApi}>Pesquisar</a>
        </form>
      </div>
    </div>
  );
}

const SideBar = () => {
  return (
    <div id="overlayNav" className="overlay">
      <a href="#" className="closebtn" onClick={OpenNav}>&times;</a>
      <div className="overlay-content" id="overlay-content"></div>
    </div>
  );
}

const MaimResults = () => {
  return <div id="main" class="main"></div>
}

const ResultsData = () => {
  return <div className="results-data" id="appAnimes"></div>
}

const FetchApi = (e) => {
  e.preventDefault();
  let key = document.getElementById("input-search").value
  let api = 'https://api.jikan.moe/v3/search/';
  return ( 
    fetch(`${api}anime?q=${key}`)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
      }) 
      .catch(err => {
        console.log(err);
      })
  );
}

const DataResults = ({ data }) => {
  return (
    data.map(anime => {`
      <div>
        <img src="${anime.image_url}"></img>
        <div className="anime-info">
          <h3>${anime.title}</h3>
          <span>${(dtFormat = new Date(anime.start_date).getFullYear())}</span>
        </div>
        <div className="synopsis">
          <h3>Synopsis</h3>
          ${anime.synopsis}
          <br/> 
          <button class="details" id="${anime.mal_id}">Details</button>
        </div>
      </div>`
    })
  );
}

const OpenNav = () => {
  document.getElementById("overlayNav").style.width = "100%";
}

const CloseNav = () => {
  document.getElementById("overlayNav").style.width = "0%";
}

ReactDOM.render (
  <PageAnime />,
  document.getElementById("root")
);