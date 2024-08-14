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

  const NewJobsBox = () => {
    const jobList = document.createElement("div");
    jobList.classList.add("jobs-list");

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
    newJobsList.appendChild(li);

    const createJobBlock = () => {
      const jobBlock = document.createElement("div");
      jobBlock.classList.add("job-block");
      jobBlock.setAttribute("draggable", "true");

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
      userEmail.innerHTML = "max536854@gmail.com";

      li.appendChild(jobBlock);
      jobBlock.appendChild(jobNameBlock);
      jobBlock.appendChild(jobInfoBlock);
      jobInfoBlock.appendChild(jobDate);
      jobInfoBlock.appendChild(userEmail);

      jobBlock.addEventListener("dragstart", () => {
        jobBlock.classList.add("dragging");
      });

      jobBlock.addEventListener("dragend", () => {
        jobBlock.classList.remove("dragging");
      });

      li.addEventListener("dragover", (e) => {
        e.preventDefault();
        const deaggedElement = document.querySelector(".dragging");
        if (deaggedElement && li !== deaggedElement.parentNode) {
          li.appendChild(deaggedElement);
        }
      });
    };

    createJobBlock();

    const jobsListFooter = document.createElement("div");
    jobsListFooter.classList.add("jobs-list-footer");

    const createElementBtn = document.createElement("button");
    createElementBtn.setAttribute("role", "button");
    createElementBtn.classList.add("createElement");
    createElementBtn.innerHTML = "Create Element";
    createElementBtn.addEventListener("click", createJobBlock);

    const plusIcon = document.createElement("i");
    plusIcon.classList.add("fa-solid", "fa-plus");

    jobListWrapper.appendChild(jobList);
    jobList.appendChild(h2);
    jobList.appendChild(jobsListHeading);
    jobsListHeading.appendChild(jobsListBody);
    jobsListBody.appendChild(newJobsList);
    jobList.appendChild(jobsListFooter);
    jobsListFooter.appendChild(createElementBtn);
    createElementBtn.appendChild(plusIcon);
  };

  Array.from({ length: 5 }, NewJobsBox);

  // Append Childs
  document.body.appendChild(bodySection);
  bodySection.appendChild(jobListWrapper);

  // FOOTER
  const footer = () => {
    const footer = document.createElement("div");
    footer.classList.add("footer");

    const button = document.createElement("button");
    button.classList.add("createBox");
    button.innerHTML = "Create Box";
    button.addEventListener("click", NewJobsBox);

    const plusButton = document.createElement("i");
    plusButton.classList.add("fa-solid", "fa-plus");

    document.body.appendChild(footer);
    footer.appendChild(button);
    button.appendChild(plusButton);
  };

  footer();
};

header();
BodySection();
