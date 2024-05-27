const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');
const apiRouter = require('./routes/api');
const app = express();
const pagesRouter = require("./routes/pages")


const PORT = 3001;


const cookieParser = require("cookie-parser");

connectToDatabase();

app.use(
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter, // Добавляем роутер для страниц
  apiRouter,
  express.static(path.join(__dirname, "public"))
);


app.listen(PORT);
