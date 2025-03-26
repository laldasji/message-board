import express from "express";
import indexRouter from "./routes/indexRouter.js";
import newMessageRouter from "./routes/newMessageRouter.js";

const PORT = 3000;
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/public', express.static('./public'))

app.use('/', indexRouter);
app.use(express.urlencoded({ extended: true }));
app.use('/new', newMessageRouter);

app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`)
})