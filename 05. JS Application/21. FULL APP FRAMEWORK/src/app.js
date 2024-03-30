//ADD SCRIPT (MODULE) INTO INDEX.HTML

//IMPORTING ALL FUNCTIONS FOR THE APP
import { logout } from "./data/users.js";
import { page } from "./lib.js";
import { updateNav } from "./util.js";
import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";

//UPDATING NAVIGATION WHEN THA APP IS STARTED
updateNav();

//ALL REDIRECTS USED INTO THE APP
page("/", showHome);
page("/catalog", showCatalog);
page("/login", showLogin);
page("/register", showRegister);
page("/create", showCreate);
page("/catalog/:id", showDetails);
page("/edit/:id", showEdit);

//INITIAL START OF THE 'PAGE' FUNCTION
page.start();

//ADDING EVENT LISTENER FOR LOGGING OUT OF THE APPLICATION
document.getElementById("logoutBtn").addEventListener("click", () => {
  logout();
  updateNav();
  page.redirect("/");
});
