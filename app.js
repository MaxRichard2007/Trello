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

  const searchFromWrapper = document.createElement("div");
  searchFromWrapper.classList.add("search-from-wrapper");

  const searchForm = document.createElement("form");
  searchForm.classList.add("search-form");

  const searchInput = document.createElement("input");
  searchInput.classList.add("search-input");

  const searchSubmit = document.createElement("button");
  searchSubmit.classList.add("search-submit");

  const topBarBlockCenter = document.createElement("div");
  topBarBlockCenter.classList.add("top-bar-block", "center");

  const topBarLogo = document.createElement("img");
  topBarLogo.classList.add("top-bar-logo");

  const topBarBlockRight = document.createElement("div");
  topBarBlockRight.classList.add("top-bar-block", "right");

  const profileIconBlock = document.createElement("div");
  profileIconBlock.classList.add("profile-icon-block");

  const profileIcon = document.createElement("i");
  profileIcon.classList.add("fa-solid", "fa-user", "profile-icon");
};
