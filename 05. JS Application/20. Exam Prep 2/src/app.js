import { page } from "./lib.js";
import { updateNav } from "./util.js";
import { showCreateView } from "./views/create.js";
import { dashboardView } from "./views/dashboard.js";
import { showDetailsView } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHomeView } from "./views/home.js";
import { showLogin } from "./views/login.js";
import { logoutView } from "./views/logout.js";
import { showRegister } from "./views/register.js";
import { showSearch } from "./views/search.js";

page("/", showHomeView);
page("/register", showRegister);
page("/login", showLogin);
page("/logout", logoutView);
page("/dashboard", dashboardView);
page("/create", showCreateView);
page("/details/:id", showDetailsView);
page("/edit/:id", showEdit);
page("/search", showSearch);

page.start();
updateNav();
