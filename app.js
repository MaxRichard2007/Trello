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

  // Append Childs
  document.body.appendChild(headerSection);
  headerSection.appendChild(headerTopBar);
  headerTopBar.appendChild(topBarBlockLeft);
  topBarBlockLeft.appendChild(homeIconBlock);
  homeIconBlock.innerHTML = '<i class="fa-solid fa-house home-icon"></i>';
  headerTopBar.appendChild(topBarBlockCenter);
  headerTopBar.appendChild(topBarBlockRight);

  topBarBlockLeft.appendChild(searchFormWrapper);
  searchFormWrapper.appendChild(searchForm);

  searchForm.appendChild(searchSubmit);
};

// BodySection

const BodySection = () => {
  const bodySection = document.createElement("div");
  bodySection.classList.add("body-section");

  const jobListWrapper = document.createElement("div");
  jobListWrapper.classList.add("jobs-list-wrapper");

  const jobList = document.createElement("div");
  jobList.classList.add("jobs-list");

  // از اینجا کد جدید هستش

  const jobsListHeading = document.createElement("div");
  jobsListHeading.classList.add("jobs-list-heading");

  const h2 = document.createElement("h2");
  h2.classList.add("jobs-list-wrapper");
  h2.innerHTML = "New Jobs";

  const jobsListBody = document.createElement("div");
  jobsListBody.classList.add("jobs-list-body");

  const newJobsList = document.createElement("ul");
  newJobsList.classList.add("new-jobs-list");

  const li = document.createElement("li");

  const jobBlock = document.createElement("div");
  jobBlock.classList.add("job-block");

  const jobNameBlock = document.createElement("div");
  jobNameBlock.classList.add("job-name-block");
  jobNameBlock.innerHTML = "Artiste Logo";

  const jobName = document.createElement("div");
  jobName.classList.add("job-name");

  const jobEdit = document.createElement("div");
  jobEdit.classList.add("job-edit");

  const jobInfoBlock = document.createElement("div");
  jobInfoBlock.classList.add("job-info-block");

  const jobDate = document.createElement("div");
  jobDate.classList.add("job-date");
  jobDate.innerHTML = "19 june";
  const userEmail = document.createElement("div");
  userEmail.classList.add("user-email");

  // Append Childs
  document.body.appendChild(bodySection);
  bodySection.appendChild(jobListWrapper);
  jobListWrapper.appendChild(jobList);

  // اینجا هم کد جدید هستش
  jobList.appendChild(h2);
  jobList.appendChild(jobsListHeading);
  jobsListHeading.appendChild(jobsListBody);
  jobsListBody.appendChild(newJobsList);
  newJobsList.appendChild(li);
  li.appendChild(jobBlock);
  jobBlock.appendChild(jobNameBlock);
  jobBlock.appendChild(jobInfoBlock);
  jobInfoBlock.appendChild(jobDate);
  jobInfoBlock.appendChild(userEmail);
};

header();
BodySection();
