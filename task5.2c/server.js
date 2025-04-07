var express = require("express")
const path = require('path');
var app = express()
const port = process.env.port || 3000;
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

const projectsRoutes = require('./routes/projects');
const usersRoutes = require('./routes/users');

app.use('/api/projects', projectsRoutes);
app.use('/api/user', usersRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
