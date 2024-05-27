// Создаём роут для запросов пользователей 
const usersRouter = require('express').Router();

// Импортируем вспомогательные функции
const {sendUserDeleted, sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendMe} = require('../controllers/users');
const { checkAuth } = require("../middlewares/auth.js");

const {
  deleteUser,
  createUser, 
  findAllUsers,
  findUserById,
  updateUser,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail, 
  checkIsUserExists,
  filterPassword,
  hashPassword
} = require('../middlewares/users')


usersRouter.get("/users", findAllUsers, filterPassword, sendAllUsers);
usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById);

// routes/users.js

usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete(
    "/users/:id",
    checkAuth,
    deleteUser,
    sendUserDeleted
)

usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;