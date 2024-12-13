const requestServer = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Welcome to this page!</title></head>");
        res.write("<body><form action='/create-user' method='POST'><input type='text' name='username'><button type='submit'>Submit</button></form></body>");
        res.write("</html>");
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => { body.push(chunk); });
        return req.on('end', () => {
            const data = Buffer.concat(body).toString();
            const actualData = data.split('=')[1];
            console.log(actualData);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }

    if (url === "/users") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html>");
        res.write("<head><title>Welcome to this page!</title></head>");
        res.write("<body><table><tr><th>Name</th></tr><tr><td>Smith</td></tr></table></body>");
        res.write("</html>");
        return res.end();
    }

}
exports.handler = requestServer;