window.addEventListener("load", start);

function start() {
  const userData = localStorage.getItem("user");

  if (!userData) {
    window.location = "/login.html";
    return;
  }
  document.querySelector("form").addEventListener("submit", onCreate);
}

async function onCreate(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  const body = {
    name: data.name.trim(),
    img: data.img.trim(),
    ingredients: parseMultiline(data.ingredients),
    steps: parseMultiline(data.steps),
  };

  try {
    if (!body.name || !body.img || !body.ingredients || !body.steps) {
      throw new Error("All fields are reguired!");
    }

    const url = "http://localhost:3030/data/recipes";
    const userData = JSON.parse(localStorage.getItem("user"));

    if (!userData) {
      throw new Error("You must be logged in to post recipes!");
    }
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Authorization": userData.accessToken,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message);
    }
    window.location = "/";
  } catch (error) {
    alert(error.message);
  }
}

function parseMultiline(data) {
  return data
    .trim()
    .split("\n")
    .map((r) => r.trim())
    .filter((r) => r);
}
