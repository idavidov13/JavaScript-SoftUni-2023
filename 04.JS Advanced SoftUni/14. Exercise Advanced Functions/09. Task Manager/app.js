// 9. Task Manager

// Use the index.html and app.js files to solve this problem. You have NO permission to directly change the given HTML code (index.html file).

// Your task

// Write the missing JavaScript code to make the Task Manager Functionality works as follows:

// When the [Add] button is clicked, first you need to validate the inputs. If any of the input fields are empty, the function doesn’t make anything.

// After validating the input fields, you need to add the new task (article) in the "Open" section.

// The HTML structure looks like this:

// The article should have two buttons "Start" and "Delete". Be careful to set the classes for the buttons and the parent-div.

// When the [Start] button is clicked, you need to move the Task in the section "In Progress". Be careful with the buttons! The HTML structure looks like this:

// When the [Delete] button is clicked, the Task (whole article) should be removed from the HTML.

// After clicking the [Finish] button, the Task will be completed, and you should move the article to the section "Complete". The buttons with their parent div-element should be removed.
function solve() {
  const taskField = document.getElementById("task");
  const descriptionField = document.getElementById("description");
  const dateField = document.getElementById("date");
  const addBtn = document.getElementById("add");
  const openArea = document
    .querySelectorAll("section")[1]
    .querySelectorAll("div")[1];
  const progressArea = document
    .querySelectorAll("section")[2]
    .querySelectorAll("div")[1];
  const completeArea = document
    .querySelectorAll("section")[3]
    .querySelectorAll("div")[1];

  addBtn.addEventListener("click", addTask);

  function addTask(e) {
    e.preventDefault();
    const task = taskField.value;
    const description = descriptionField.value;
    const date = dateField.value;
    // console.log(task, description, date);

    if (!task || !description || !date) {
      return;
    }

    createArticle("OpenTask", "green", "red", task, description, date);
  }

  function createArticle(type, btnClass1, btnClass2, task, description, date) {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = task;
    const p1 = document.createElement("p");
    p1.textContent = `Description: ${description}`;
    const p2 = document.createElement("p");
    p2.textContent = `Due Date: ${date}`;

    article.appendChild(h3);
    article.appendChild(p1);
    article.appendChild(p2);

    if (type === "OpenTask") {
      const divEl = document.createElement("div");
      divEl.className = "flex";
      const btn1 = document.createElement("button");
      btn1.textContent = "Start";
      btn1.className = btnClass1;
      btn1.addEventListener("click", () => {
        deleteTask(article);
        createArticle("ProgressTask", "red", "orange", task, description, date);
      });

      const btn2 = document.createElement("button");
      btn2.textContent = "Delete";
      btn2.className = btnClass2;
      btn2.addEventListener("click", () => deleteTask(article));

      divEl.appendChild(btn1);
      divEl.appendChild(btn2);
      article.appendChild(divEl);
      openArea.appendChild(article);
    } else if (type === "ProgressTask") {
      const divEl = document.createElement("div");
      divEl.className = "flex";
      const btn1 = document.createElement("button");
      btn1.textContent = "Delete";
      btn1.className = btnClass1;
      btn1.addEventListener("click", () => {
        deleteTask(article);
      });

      const btn2 = document.createElement("button");
      btn2.textContent = "Finish";
      btn2.className = btnClass2;
      btn2.addEventListener("click", () => {
        deleteTask(article);
        createArticle("CompleteTask", null, null, task, description, date);
      });

      divEl.appendChild(btn1);
      divEl.appendChild(btn2);
      article.appendChild(divEl);
      progressArea.appendChild(article);
    } else if (type === "CompleteTask") {
      completeArea.appendChild(article);
    }

    function deleteTask(article) {
      article.remove();
    }
  }
}
