function solve() {
  const inputs = {
    snowmanName: document.getElementById("snowman-name"),
    height: document.getElementById("snowman-height"),
    location: document.getElementById("location"),
    creator: document.getElementById("creator-name"),
    specialAttribute: document.getElementById("special-attribute"),
  };

  const addBtn = document.querySelector(".add-btn");
  addBtn.addEventListener("click", onAddClick);

  const infoList = document.querySelector(".snowman-preview");
  const snowList = document.querySelector(".snow-list");

  function onAddClick(event) {
    event.preventDefault();

    // Check if all fields are filled
    for (let input of Object.values(inputs)) {
      if (!input.value.trim()) {
        return;
      }
    }

    // Create preview item
    const result = createPreview(
      inputs.snowmanName.value,
      inputs.height.value,
      inputs.location.value,
      inputs.creator.value,
      inputs.specialAttribute.value
    );

    // Append preview item to Snowman Preview section
    infoList.appendChild(result);

    // Clear input fields and disable Add button
    for (let input of Object.values(inputs)) {
      input.value = "";
    }
    addBtn.disabled = true;
  }

  function createPreview(
    snowmanName,
    height,
    location,
    creator,
    specialAttribute
  ) {
    const element = createInfo(
      snowmanName,
      height,
      location,
      creator,
      specialAttribute
    );

    const divBtn = document.createElement("div");
    divBtn.className = "btn-container";

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () =>
      onEditClick(snowmanName, height, location, creator, specialAttribute)
    );

    const nextBtn = document.createElement("button");
    nextBtn.className = "next-btn";
    nextBtn.textContent = "Next";
    nextBtn.addEventListener("click", () =>
      onNextClick(snowmanName, height, location, creator, specialAttribute)
    );

    divBtn.appendChild(editBtn);
    divBtn.appendChild(nextBtn);
    element.appendChild(divBtn);

    return element;
  }

  function createInfo(
    snowmanName,
    height,
    location,
    creator,
    specialAttribute
  ) {
    const element = document.createElement("li");
    element.className = "snowman-info";
    const article = document.createElement("article");

    article.innerHTML = `
      <p>Name: ${snowmanName}</p>
      <p>Height: ${height}</p>
      <p>Location: ${location}</p>
      <p>Creator: ${creator}</p>
      <p>Attribute: ${specialAttribute}</p>
    `;

    element.appendChild(article);

    return element;
  }

  function onEditClick(
    snowmanName,
    height,
    location,
    creator,
    specialAttribute
  ) {
    // Clear Snowman Preview section
    infoList.textContent = "";

    // Enable Add button
    addBtn.disabled = false;
  }

  function onNextClick(
    snowmanName,
    height,
    location,
    creator,
    specialAttribute
  ) {
    const result = createPreview(
      snowmanName,
      height,
      location,
      creator,
      specialAttribute
    );
    snowList.appendChild(result);

    // Clear Snowman Preview section
    infoList.textContent = "";

    // Disable Add button
    addBtn.disabled = true;
  }

  function onFinishClick() {
    // Remove main element
    document.getElementById("hero").remove();

    // Show back-img
    document.getElementById("back-img").style.display = "block";

    // Add Back button
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
