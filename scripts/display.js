//   PRELOADER STYLING
const delayPreloader = setTimeout(Preloader, 1500);

function Preloader() {
    var loader = document.querySelector('.preloader');
    loader.style.display = "none";
}
function stopPreloader() {
  clearTimeout(Preloader);
}

const openTopAnime = () => {
    console.log("Clicked Top Anime")
    window.location.href = "./details.html";
    sessionStorage.setItem("Id", "1")
}
const openUpcomingAnime = () => {
    console.log("Clicked UpcomingAnime")
    window.location.href = "./details.html";
    sessionStorage.setItem("Id", "2")
}
const openTrendingAnime = () => {
    console.log("Clicked TrendingAnime")
    window.location.href = "./details.html";
    sessionStorage.setItem("Id", "3")
}
const openTopManga = () => {
    console.log("Clicked TopManga")
    window.location.href = "./details.html";
    sessionStorage.setItem("Id", "4")
}
const openTrendingManga = () => {
    console.log("Clicked TrendingMangae")
    window.location.href = "./details.html";
    sessionStorage.setItem("Id", "5")
}
const openSongs = () => {
    console.log("Clicked Songs")
    window.location.href = "./details.html";
    sessionStorage.setItem("Id", "6")
}
const openFacts = () => {
    console.log("Clicked Facts")
    window.location.href = "./details.html";
    sessionStorage.setItem("Id", "7")
}
