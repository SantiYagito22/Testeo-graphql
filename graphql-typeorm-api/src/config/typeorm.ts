import { createConnection } from "typeorm";
import path from "path";


export async function connect()
{
     await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'santi',
        password: 'password',
        database: 'graphqlts',
        entities : [
            path.join(__dirname, '../entity/**/**.ts')
        ],
        synchronize: true
    });
    console.log("Database is connected")
}