// HEADER
const header = () => {
  const headerSection = document.createElement("div");
  headerSection.classList.add("header-section");

  const headerTopBar = document.createElement("div");
  headerTopBar.classList.add("header-top-bar");

  const topBarBlockLeft = document.createElement("div");
  topBarBlockLeft.classList.add("top-bar-block", "left");

  const homeIconBlock = document.createElement("div");
  homeIconBlock.classList.add("home-icon-block");

  const homeIcon = document.createElement("i");
  homeIcon.classList.add("fa-solid", "fa-house", "home-icon");

  const searchFormWrapper = document.createElement("div");
  searchFormWrapper.classList.add("search-from-wrapper");

  const searchForm = document.createElement("form");
  searchForm.id = "search-form";
  searchForm.innerHTML = '<input type="text" id="search-input"> ';

  const searchInput = document.createElement("input");
  searchInput.classList.add("search-input");

  const searchSubmit = document.createElement("button");
  searchSubmit.id = "search-submit";
  searchSubmit.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';

  const topBarBlockCenter = document.createElement("div");
  topBarBlockCenter.classList.add("top-bar-block", "center");

  const imgElement = document.createElement("img");

  imgElement.classList.add("top-bar-logo");

  imgElement.src =
    "https://d2k1ftgv7pobq7.cloudfront.net/meta/u/res/images/trello-header-logos/af7af6ed478d3460709d715d9b3f74a4/trello-logo-white.svg";
  topBarBlockCenter.appendChild(imgElement);

  const topBarBlockRight = document.createElement("div");
  topBarBlockRight.classList.add("top-bar-block", "right");
  topBarBlockRight.innerHTML = '<i class="fa-solid fa-user profile-icon"></i>';

  const profileIconBlock = document.createElement("div");
  profileIconBlock.classList.add("profile-icon-block");

  const profileIcon = document.createElement("i");
  profileIcon.classList.add("fa-solid", "fa-user", "profile-icon");
};
