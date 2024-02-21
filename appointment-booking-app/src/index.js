// express is creating the server so we don't need to do the job
const express = require('express');
const app = express()
const homeController = require('../src/controllers/homeControllers')
const appointmentsController = require('../src/controllers/appointmentsControllers')
const port = 3000

app.get('/', (req, res) => {

    const data = homeController.getUsers();

    return res.json (data)
});

app.get('/appointments', (req, res) => {

    const data = appointmentsController.getAppointments();
    return res.json (data)
});

app.listen(port, () => {
    console.log(`Appointment bookinga app is listening on port ` + port);
});