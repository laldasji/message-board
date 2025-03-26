import pool from "./pool.js";

async function insertMessage(body, username) {
    await pool.query("INSERT INTO message_list (body, username) VALUES ($1, $2)", [body, username]);
}

async function getAllMessages() {
    const { rows } = await pool.query('select * from message_list order by added desc');
    return rows;
}

export default {
    insertMessage,
    getAllMessages
}