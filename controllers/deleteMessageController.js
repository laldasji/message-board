import db from '../database/queries.js';
import { body, validationResult } from 'express-validator';

const validateMessage = () => [
    body("id")
    .isInt({ min: 0, max: 10000000 }).withMessage(`Message ID Out of Range`),
    body("password")
    .isLength({ max: 30 }).withMessage("Password too long!")
]

export const deleteMessagePost = [
    validateMessage(),
    async (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            const { id, password } = req.body;
            await db.deleteMessage(id, password);
        }
        res.redirect("/");
    }
]