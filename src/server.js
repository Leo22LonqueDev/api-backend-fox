const app = require('./app')
require('dotenv').config()
const serverPort = process.env.SERVER_PORT

app.listen(serverPort, () => {
    console.log(`Server rodando na porta ${serverPort}`);
})