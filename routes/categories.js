// Создаём роут для запросов категорий 
const categoriesRouter = require('express').Router();

// Импортируем вспомогательные функции
const {sendAllCategories, sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted} = require('../controllers/categories');
const {createCategory, findCategoryById, findAllCategories, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName} = require('../middlewares/categories');
const { checkAuth } = require("../middlewares/auth.js");
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById);
// routes/categories.js
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);

categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  checkAuth,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.delete(
  "/categories/:id",
  checkAuth,
  deleteCategory,
  sendCategoryDeleted
); 
module.exports = categoriesRouter;