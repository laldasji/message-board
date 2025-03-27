import { Router } from "express";
import { deleteMessagePost } from "../controllers/deleteMessageController.js";

const deleteMessageRouter = Router();

deleteMessageRouter.post('/', deleteMessagePost);

export default deleteMessageRouter;