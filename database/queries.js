import pool from "./pool.js";

async function insertMessage(body, username) {
    await pool.query("INSERT INTO message_list (body, username) VALUES ($1, $2)", [body, username]);
}

async function getAllMessages() {
    const { rows } = await pool.query('SELECT * FROM message_list ORDER BY ADDED DESC');
    return rows;
}

async function deleteMessage(id, password) {
    if (password = process.env.DB_DELETION_PASSWORD) {
        await pool.query("DELETE FROM message_list WHERE id = $1", [id]);
    }
}

export default {
    insertMessage,
    getAllMessages,
    deleteMessage
}