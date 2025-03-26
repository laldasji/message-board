import db from '../database/queries.js';
import { body, validationResult } from "express-validator";

const validateMessage = () => [
    body("body").trim()
    .isLength({ min: 1, max: 500 }).withMessage(`Message should be between 1 and 500 characters`),
    body("username").trim()
    .isLength({ max: 30 }).withMessage(`Username should be less than 30 characters`)
]

export const addMessagePost = [
    validateMessage(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("newMessageForm", {
                errors: errors.errors
            })
        }
        const { body, username } = req.body;
        await db.insertMessage(body, username);
        res.redirect("/");
    }
]