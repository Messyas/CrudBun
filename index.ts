const server = Bun.serve({
    port: 3000,
    fetch(req: Request) {
        const url = new URL(req.url);

        if(url.pathname === '/users') {

        }
        return new Response('Not found', { status: 404 });
    },
});
