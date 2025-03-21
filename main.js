import express from "express";
import indexRouter from "./routes/indexRouter.js";
import newMessageRouter from "./routes/newMessageRouter.js";

const messages = [
    {
        text: 'Has it ever occured to you that the hand you wipe your bum with is the hand you\'ve eaten something with at some point in your life? And at this point\
        you have no idea what you\'d have eaten that had poop particles in it just because you couldn\'t wash your hand properly that ONE time, which, again, you don\'t remember',
        user: 'Abhinav Ashutosh',
        added: new Date()
    }
]

const PORT = 8080;
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/public', express.static('./public'))

app.use('/', indexRouter(messages));
app.use(express.urlencoded({ extended: true }));
app.use('/new', newMessageRouter(messages));

app.listen(PORT, () => {
    console.log(`Listening on port : ${PORT}`)
})