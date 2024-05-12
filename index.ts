import { Database } from 'bun:sqlite';

const db = new Database('mydb.sqlite', { create: true });

db.run("CREATE TABLE IF NOT EXISTS users (id INTERGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT)");

interface User{
    id: number;
    name: string;
    email: string;
    password: string;
}

const server = Bun.serve({
    port: 3000,
    async fetch(req: Request) {
        const url = new URL(req.url);

        if(url.pathname === '/users') {

            if(req.method === 'POST') {

                const body = await req.json();
                
                db.run('INSERT INTO users (name, email, password) values (?,?,?)', body.name , body.email, )

                return new Response(null, { status: 201 });

            } else if(req.method === 'GET') {

                const users: User[] = []

                return Response.json({
                    users
                })
            }
        }
        return new Response('Not found', { status: 404 });

    },
});
