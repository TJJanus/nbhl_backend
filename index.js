require('dotenv').config();

const server = require('./api/server.js');

const PORT = process.env.port || 4000;

server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})