// express is creating the server so we don't need to do the job
const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send ('hello world')
});

app.listen(port, () => {
    console.log(`Appointment bookinga app is listening on port ` + port);
});