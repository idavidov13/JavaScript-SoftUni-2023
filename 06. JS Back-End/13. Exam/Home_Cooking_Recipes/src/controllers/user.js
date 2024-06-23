const { Router } = require("express");
const { login, register } = require("../services/user");
const { createToken } = require("../services/jwt");
const { isGuest } = require("../middlewares/guards");
const { body, validationResult } = require("express-validator");
const { parseError } = require("../util");

const userRouter = Router();

userRouter.get("/login", isGuest(), async (req, res) => {
  res.render("login");
});

userRouter.post(
  "/login",
  isGuest(),
  body("email").trim(),
  body("password").trim(),
  async (req, res) => {
    const { email, password } = req.body;

    try {
      const result = await login(email, password);
      const token = createToken(result);

      res.cookie("token", token);
      res.redirect("/");
    } catch (err) {
      res.render("login", {
        data: { email },
        errors: parseError(err).errors,
      });
    }
  }
);

userRouter.get("/register", isGuest(), async (req, res) => {
  res.render("register");
});

userRouter.post(
  "/register",
  isGuest(),
  body("email")
    .trim()
    .isLength({ min: 10 })
    .isEmail()
    .withMessage(
      "Invalid email. The email should be at least 10 characters long"
    ),
  body("name")
    .trim()
    .isLength({ min: 2, max: 20 })
    .withMessage(
      "Invalid username. The username should be between 2 and 20 characters long"
    ),
  body("password")
    .trim()
    .isLength({ min: 4 })
    .withMessage(
      "Invalid password. The password should be at least 4 characters long"
    ),
  body("re-password")
    .trim()
    .custom((value, { req }) => {
      return value == req.body.password;
    })
    .withMessage("Passwords don\t match"),
  async (req, res) => {
    const { email, name, password } = req.body;

    try {
      const validation = validationResult(req);

      if (validation.errors.length) {
        throw validation.errors;
      }

      const result = await register(email, name, password);
      const token = createToken(result);

      res.cookie("token", token);
      res.redirect("/");
    } catch (err) {
      res.render("register", {
        data: { email, name },
        errors: parseError(err).errors,
      });
    }
  }
);

userRouter.get("/logout", async (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

module.exports = { userRouter };
