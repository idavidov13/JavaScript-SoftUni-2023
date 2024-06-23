const { Router } = require("express");
const {
  getById,
  create,
  update,
  deleteById,
  addRecommend,
} = require("../services/recipe");
const { isUser } = require("../middlewares/guards");
const { parseError } = require("../util");
const { body, validationResult } = require("express-validator");

const recipeRouter = Router();

recipeRouter.get("/create", isUser(), (req, res) => {
  res.render("create");
});

recipeRouter.post(
  "/create",
  isUser(),
  body("title")
    .trim()
    .isLength({ min: 2 })
    .withMessage(
      "Invalid title. The title should be at least 10 characters long"
    ),
  body("description")
    .trim()
    .isLength({ min: 10, max: 100 })
    .withMessage(
      "Invalid description. The description should be between 10 and 100 characters long"
    ),
  body("ingredients")
    .trim()
    .isLength({ min: 10, max: 200 })
    .withMessage(
      "Invalid ingredients. The ingredients should be between 10 and 200 characters long"
    ),
  body("instructions")
    .trim()
    .isLength({ min: 10 })
    .withMessage(
      "Invalid instructions. The instructions should be at least 10 characters long"
    ),
  body("image")
    .trim()
    .isURL({ require_tld: false, require_protocol: true })
    .withMessage(
      "Invalid image. The image should start with http:// or https:// "
    ),
  async (req, res) => {
    const userId = req.user._id;

    try {
      const validation = validationResult(req);

      if (validation.errors.length) {
        throw validation.errors;
      }

      const result = await create(req.body, userId);

      res.redirect("/catalog");
    } catch (err) {
      res.render("create", {
        data: req.body,
        errors: parseError(err).errors,
      });
    }
  }
);

recipeRouter.get("/edit/:id", isUser(), async (req, res) => {
  const id = req.params.id;
  const recipe = await getById(id);

  if (!recipe) {
    res.status(404).render("404");
    return;
  }

  if (recipe.author.toString() != req.user._id) {
    res.redirect("/login");
  }

  req.res.render("edit", { data: recipe });
});

recipeRouter.post(
  "/edit/:recipeId",
  isUser(),
  body("title")
    .trim()
    .isLength({ min: 2 })
    .withMessage(
      "Invalid title. The title should be at least 10 characters long"
    ),
  body("description")
    .trim()
    .isLength({ min: 10, max: 100 })
    .withMessage(
      "Invalid description. The description should be between 10 and 100 characters long"
    ),
  body("ingredients")
    .trim()
    .isLength({ min: 10, max: 200 })
    .withMessage(
      "Invalid ingredients. The ingredients should be between 10 and 200 characters long"
    ),
  body("instructions")
    .trim()
    .isLength({ min: 10 })
    .withMessage(
      "Invalid instructions. The instructions should be at least 10 characters long"
    ),
  body("image")
    .trim()
    .isURL({ require_tld: false, require_protocol: true })
    .withMessage(
      "Invalid image. The image should start with http:// or https:// "
    ),
  async (req, res) => {
    const recipeId = req.params.recipeId;
    const userId = req.user._id;

    try {
      const validation = validationResult(req);

      if (validation.errors.length) {
        throw validation.errors;
      }

      const result = await update(recipeId, req.body, userId);

      res.redirect("/catalog/" + recipeId);
    } catch (err) {
      res.render("edit", {
        data: req.body,
        errors: parseError(err).errors,
      });
    }
  }
);

recipeRouter.get("/delete/:id", isUser(), async (req, res) => {
  const id = req.params.id;

  try {
    await deleteById(id, req.user._id);
  } catch (err) {
    if (err.message == "Access denied") {
      res.redirect("/login");
      return;
    }
  }
  res.redirect("/catalog");
});

recipeRouter.get("/recommend/:recipeId", isUser(), async (req, res) => {
  const recipeId = req.params.recipeId;
  const userId = req.user._id;

  try {
    const result = await addRecommend(recipeId, userId);

    res.redirect("/catalog/" + recipeId);
  } catch (err) {
    res.render("404");
  }
});

module.exports = { recipeRouter };
