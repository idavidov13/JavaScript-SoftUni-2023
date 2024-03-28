import { login } from "../data/users.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler, updateNav } from "../util.js";

const loginTemp = (handler) => html`<section id="login">
  <div class="form">
    <h2>Login</h2>
    <form class="login-form" @submit=${handler}>
      <input type="text" name="email" id="email" placeholder="email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button type="submit">login</button>
      <p class="message">
        Not registered? <a href="/register">Create an account</a>
      </p>
    </form>
  </div>
</section>`;

export function showLogin(ctx) {
  const handler = createSubmitHandler(onSubmit);
  render(loginTemp(handler));
}

async function onSubmit(data, form) {
  if (!data.email || !data.password) {
    return alert("All fields are required");
  }

  await login(data.email, data.password);
  updateNav();
  page.redirect("/");
}
