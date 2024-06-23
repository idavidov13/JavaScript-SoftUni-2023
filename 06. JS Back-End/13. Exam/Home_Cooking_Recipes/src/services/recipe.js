const { Recipe } = require("../models/Recipe");

async function getAll() {
  return Recipe.find().lean();
}

async function getRecent() {
  return Recipe.find().lean().sort({ $natural: -1 }).limit(3).lean();
}

async function searchRecipes(search) {
  const query = {};

  query.title = new RegExp(search, "i");

  return Recipe.find(query).lean();
}

async function getById(id) {
  return Recipe.findById(id).lean();
}

async function create(data, authorId) {
  const record = new Recipe({
    title: data.title,
    ingredients: data.ingredients,
    instructions: data.instructions,
    description: data.description,
    image: data.image,
    author: authorId,
  });

  await record.save();

  return record;
}

async function update(id, data, userId) {
  const record = await Recipe.findById(id);

  if (!record) {
    throw new ReferenceError("Record not found" + id);
  }
  if (record.author.toString() != userId) {
    throw new Error("Access denied");
  }

  (record.title = data.title),
    (record.ingredients = data.ingredients),
    (record.instructions = data.instructions),
    (record.description = data.description),
    (record.image = data.image),
    await record.save();

  return record;
}

async function addRecommend(recipeId, userId) {
  const record = await Recipe.findById(recipeId);

  if (!record) {
    throw new ReferenceError("Recipe not found " + recipeId);
  }

  if (record.author.toString() == userId) {
    throw new Error("Cannot recommend your own recipe");
  }

  if (record.recommendList.find((v) => v.toString() == userId)) {
    throw new Error("Only one recommendation is allowed per recipe");
  }

  record.recommendList.push(userId);

  await record.save();
  return record;
}

async function deleteById(id, userId) {
  const record = await Recipe.findById(id);

  if (!record) {
    throw new ReferenceError("Record not found" + id);
  }
  if (record.author.toString() != userId) {
    throw new Error("Access denied");
  }

  await Recipe.findByIdAndDelete(id);
}

module.exports = {
  getAll,
  getRecent,
  create,
  getById,
  update,
  deleteById,
  addRecommend,
  searchRecipes,
};
