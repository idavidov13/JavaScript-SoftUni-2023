import { page } from "./lib.js";
import { logout } from "./data/users.js";

import { updateNav } from "./util.js";
import { showHome } from "./views/homeView.js";
import { showLogin } from "./views/loginView.js";
import { showRegister } from "./views/registerView.js";
import { showDashboard } from "./views/dashboardView.js";
import { showCreate } from "./views/createView.js";
import { showDetails } from "./views/detailsView.js";
import { showEdit } from "./views/editView.js";

updateNav();

page("/", showHome);
page("/login", showLogin);
page("/register", showRegister);
page("/dashboard", showDashboard);
page("/create", showCreate);
page("/dashboard/:id", showDetails);
page("/edit/:id", showEdit);

page.start();

document.getElementById("logoutBtn").addEventListener("click", () => {
  logout();
  updateNav();
  page.redirect("/");
});
