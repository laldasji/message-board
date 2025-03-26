import { Router } from "express";
import db from '../database/queries.js';

const indexRouter = Router();

indexRouter.get('/', async (req, res) => {
    const messages = await db.getAllMessages();
    res.render('index', {
        title: 'Mini Message Board',
        messages: messages,
        dateOptions: { 
            minute: '2-digit',
            hour: '2-digit',
            day: 'numeric', 
            month: 'long', 
            year: 'numeric',
        }
    });
})


export default indexRouter;