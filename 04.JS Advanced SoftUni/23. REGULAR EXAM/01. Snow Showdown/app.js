window.addEventListener("load", solve);

function solve() {
  const inputs = {
    snowmaneName: document.getElementById("snowman-name"),
    height: document.getElementById("snowman-height"),
    location: document.getElementById("location"),
    creator: document.getElementById("creator-name"),
    specialAttribute: document.getElementById("special-attribute"),
  };

  const addBtn = document.getElementsByClassName("add-btn")[0];
  addBtn.addEventListener("click", onAddClick);

  const infoList = document.getElementsByClassName("snowman-preview")[0];
  const snowList = document.getElementsByClassName("snow-list")[0];

  function onAddClick(event) {
    //DONE
    event.preventDefault();

    if (
      inputs.snowmaneName.value == "" ||
      inputs.height.value == "" ||
      inputs.location.value == "" ||
      inputs.creator.value == "" ||
      inputs.specialAttribute.value == ""
    ) {
      return;
    }

    const snowmaneName = inputs.snowmaneName.value;
    const height = inputs.height.value;
    const location = inputs.location.value;
    const creator = inputs.creator.value;
    const specialAttribute = inputs.specialAttribute.value;

    addBtn.parentElement.reset();
    addBtn.disabled = true;

    const result = createPreview(
      snowmaneName,
      height,
      location,
      creator,
      specialAttribute
    );

    infoList.appendChild(result);
  }

  function createPreview(
    snowmaneName,
    height,
    location,
    creator,
    specialAttribute
  ) {
    const element = createInfo(
      snowmaneName,
      height,
      location,
      creator,
      specialAttribute
    );

    const divBtn = e("div");
    divBtn.className = "btn-container";

    const editBtn = e("button", "Edit");
    editBtn.className = "edit-btn";
    editBtn.addEventListener("click", () =>
      onEditClick(snowmaneName, height, location, creator, specialAttribute)
    );

    const nextBtn = e("button", "Next");
    nextBtn.className = "next-btn";
    nextBtn.addEventListener("click", () =>
      onNextClick(snowmaneName, height, location, creator, specialAttribute)
    );

    divBtn.appendChild(editBtn);
    divBtn.appendChild(nextBtn);
    element.appendChild(divBtn);

    return element;
    debugger;
  }

  function createInfo(
    //DONE
    snowmaneName,
    height,
    location,
    creator,
    specialAttribute
  ) {
    const element = e("li");
    element.className = "snowman-info";
    const article = e("article");

    article.appendChild(e("p", `Name: ${snowmaneName}`));
    article.appendChild(e("p", `Height: ${height}`));
    article.appendChild(e("p", `Location: ${location}`));
    article.appendChild(e("p", `Creator: ${creator}`));
    article.appendChild(e("p", `Attribute: ${specialAttribute}`));
    element.appendChild(article);

    return element;
  }

  function e(type, content) {
    //DONE
    const element = document.createElement(type);
    if (content) {
      element.textContent = content;
    }
    return element;
  }

  function onEditClick(
    snowmaneName,
    height,
    location,
    creator,
    specialAttribute
  ) {
    inputs.snowmaneName.value = snowmaneName;
    inputs.height.value = height;
    inputs.location.value = location;
    inputs.creator.value = creator;
    inputs.specialAttribute.value = specialAttribute;

    infoList.textContent = "";
    addBtn.disabled = false;
  }

  function onNextClick(
    snowmaneName,
    height,
    location,
    creator,
    specialAttribute
  ) {
    const result = createConfirmation(
      snowmaneName,
      height,
      location,
      creator,
      specialAttribute
    );
    snowList.appendChild(result);
    infoList.textContent = "";
    addBtn.disabled = true;
  }

  function createConfirmation(
    snowmaneName,
    height,
    location,
    creator,
    specialAttribute
  ) {
    const element = createInfoSend(
      snowmaneName,
      height,
      location,
      creator,
      specialAttribute
    );

    return element;
  }

  function createInfoSend(
    //DONE
    snowmaneName,
    height,
    location,
    creator,
    specialAttribute
  ) {
    const element = e("li");
    element.className = "snowman-content";
    const article = e("article");

    article.appendChild(e("p", `Name: ${snowmaneName}`));
    article.appendChild(e("p", `Height: ${height}`));
    article.appendChild(e("p", `Location: ${location}`));
    article.appendChild(e("p", `Creator: ${creator}`));
    article.appendChild(e("p", `Attribute: ${specialAttribute}`));
    const sendBtn = e("button", "Send");
    sendBtn.className = "send-btn";
    sendBtn.addEventListener("click", () =>
      onFinishClick(snowmaneName, height, location, creator, specialAttribute)
    );
    article.appendChild(sendBtn);
    element.appendChild(article);

    return element;
  }

  function onFinishClick() {
    document.getElementById("hero").remove();

    document.getElementById("back-img").removeAttribute("hidden");

    const backBtn = document.createElement("button");
    backBtn.className = "back-btn";
    backBtn.textContent = "Back";
    backBtn.addEventListener("click", () => reloadPage());

    document.querySelector(".body").appendChild(backBtn);
  }

  function reloadPage() {
    location.reload();
  }
}
