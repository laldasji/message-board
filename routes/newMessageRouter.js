import { Router } from "express";
import { addMessagePost } from "../controllers/newMessageController.js";

const newMessageRouter = Router();

newMessageRouter.get('/', (req, res) => {
    res.render('newMessageForm', { errors : false });
})

newMessageRouter.post('/', addMessagePost);

export default newMessageRouter;