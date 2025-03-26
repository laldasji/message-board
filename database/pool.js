import 'dotenv/config';
import fs from "fs";
import pkg from "pg";
const { Pool } = pkg;

export default new Pool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: 24135,
        ssl: {
            rejectUnauthorized: true,
            ca: process.env.CA_CERTIFICATE
        }
})