import express from "express";
import indexRouter from "./routes/indexRouter.js";
import newMessageRouter from "./routes/newMessageRouter.js";

const messages = [
    {
        text: 'I was born',
        user: 'Abhinav',
        added: new Date(2002, 11, 12)
    },
    {
        text: 'Life happened',
        user: 'Laldasji',
        added: new Date(2010, 11, 16)
    },
    {
        text: 'I made this project',
        user: 'Ashutosh',
        added: new Date(2025, 2, 19)
    },
    {
        text: 'I was born',
        user: 'Abhinav',
        added: new Date(2002, 11, 12)
    },
    {
        text: 'Life happened',
        user: 'Laldasji',
        added: new Date(2010, 11, 16)
    },
    {
        text: 'I made this project',
        user: 'Ashutosh',
        added: new Date(2025, 2, 19)
    },
    {
        text: 'I was born',
        user: 'Abhinav',
        added: new Date(2002, 11, 12)
    },
    {
        text: 'Life happened',
        user: 'Laldasji',
        added: new Date(2010, 11, 16)
    },
    {
        text: 'I made this project',
        user: 'Ashutosh',
        added: new Date(2025, 2, 19)
    },
    {
        text: 'I was born',
        user: 'Abhinav',
        added: new Date(2002, 11, 12)
    },
    {
        text: 'Life happened',
        user: 'Laldasji',
        added: new Date(2010, 11, 16)
    },
    {
        text: 'I made this project',
        user: 'Ashutosh',
        added: new Date(2025, 2, 19)
    },
    {
        text: 'I was born',
        user: 'Abhinav',
        added: new Date(2002, 11, 12)
    },
    {
        text: 'Life happened',
        user: 'Laldasji',
        added: new Date(2010, 11, 16)
    },
    {
        text: 'I made this project',
        user: 'Ashutosh',
        added: new Date(2025, 2, 19)
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