const topAnimeContainer = document.getElementById("container-main2");
const upcomningAnimeContainer = document.getElementById("container-main3");
const trendingAnimeContainer = document.getElementById("container-main4");
const topMangaContainer = document.getElementById("container-main5");
const trendingMangaContainer = document.getElementById("container-main6");
const container7 = document.getElementById("container-main7");
const quoteContainer = document.getElementById("quote");
const By = document.getElementById("By");

//---------2-----------------
//FOR TOP RANKED ANIME DATABASE
const topAnime = async () => {
  const request = await fetch("https://api.jikan.moe/v3/top/anime/1/bypopularity");
  const response = await request.json();
  const list = response.top;
  // console.log("top anime - ",list);
  for (var i = 0; i < 4; i++) {
    var current = list[i];
    topAnimeContainer.innerHTML += `
        <div class="card-container">
            <div class="card">
                <img src="${current.image_url}" class="card-image">
                <h4 class="titles">${current.title}</h4>
            </div>
            </div>`;
  }
};
topAnime();

//UPCOMING ANIME - 3
const upcomningAnime = async () => {
  try {
    const request = await fetch("https://api.jikan.moe/v3/top/anime/1/upcoming", {
      method: "GET",
    });
    const response = await request.json();
    const list = response.top;
    // console.log("Upcomning anime - ", list)
    for (var i = 0; i < 4; i++) {
      var title = list[i].title;
      var img = list[i].image_url;
      var rank = list[i].rank;
      var link = list[i].url;
      upcomningAnimeContainer.innerHTML += `
        <div class="card-container">
            <div class="card">
                <img src="${img}" class="card-image">
                <h4 class="titles">${title}</h4>
            </div>
            </div>`;
    }
  } catch (err) {
    console.log(err);
    upcomningAnimeContainer.innerHTML = `<p class="errorMessage">This section seems to be out of Chakra for now Dattebayo!</p>`;
  }
};
upcomningAnime();

//TRENDING ANIME - 4
const trendingAnime = async () => {
  try {
    const request = await fetch(
      "https://api.aniapi.com/v1/anime?year=2021&status=0",
      {
        method: "GET",
      }
    );
    const response = await request.json();
    console.log(response);
    const list = response.data.documents;
    for (var i = 0; i < 4; i++) {
      // console.log("ta- ", list[0]);
      trendingAnimeContainer.innerHTML += `
        <div class="card-container">
            <div class="card">
                <img src="${list[i].cover_image}" class="card-image">
                <h4 class="titles">${list[i].titles.en}</h4>
            </div>
            </div>
            `;
    }
  } catch (err) {
    console.log(err);
    trendingAnimeContainer.innerHTML = `<p class="errorMessage">This section seems to be out of Chakra for now Dattebayo!</p>`;
  }
};
trendingAnime();

//TOP RATED MANGA -5
const topManga = async () => {
  try {
    const request = await fetch("https://api.jikan.moe/v3/top/manga", {
      method: "GET",
    });
    const response = await request.json();
    const list = response.top;
    // console.log("top manga - ",list);
    for (var i = 0; i < 4; i++) {
      // console.log("tm",list[0]);
      var current = list[i];
      topMangaContainer.innerHTML += `
        <div class="card-container">
            <div class="card">
                <a href="${current.url}"><img src="${current.image_url}" class="card-image"></a>
                <h4 class="titles">${current.title}</h4>
            </div>
            </div>`;
    }
  } catch (err) {
    console.log(err);
    topMangaContainer.innerHTML = `<p class="errorMessage">This section seems to be out of Chakra for now Dattebayo!</p>`;
  }
};
topManga();

//TRENDING MANGA -6
const trendingManga = async () => {
  try {
    const request = await fetch("https://kitsu.io/api/edge/trending/manga", {
      method: "GET",
    });
    const response = await request.json();
    // const list = data.data;
    for (var i = 0; i < 4; i++) {
      // console.log("trm- ",data.data[0].attributes);
      var img = response.data[i].attributes.posterImage.original;
      trendingMangaContainer.innerHTML += `
        <div class="card-container">
            <div class="card">
                <img src="${img}" class="card-image">
                <h4 class="titles">${response.data[i].attributes.canonicalTitle}</h4>
            </div>
            </div>`;
    }
  } catch (err) {
    console.log(err);
    trendingMangaContainer.innerHTML = `<p class="errorMessage">This section seems to be out of Chakra for now Dattebayo!</p>`;
  }
};
trendingManga();

//GET QUOTES
const getQuote = async () => {
  try {
    const request = await fetch("https://animechan.vercel.app/api/random");
    const response = await request.json();
    // console.log(response);
    quoteContainer.innerText = `" ${response.quote} "`;
    By.innerHTML = `<p> - ${response.character} <br>from ${response.anime} </p>`;
  } catch (err) {
    console.log(err);
    quoteContainer.innerHTML = `<p class="errorMessage">This section seems to be out of Chakra for now Dattebayo!</p>`;
  }
};
getQuote();
