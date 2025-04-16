var express = require("express")
const path = require('path');
var app = express();
const http = require("http");

const server = http.createServer(app);
const io = require("socket.io")(server);
const port = process.env.port || 3000;
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    password: String,
    email: String
});
const User = mongoose.model('User', UserSchema);

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String
});
const Project = mongoose.model('Project', ProjectSchema);

app.post('/api/user', (req, res) => {
    new User(req.body).save()
        .then(() => res.status(201).send({ message: "User saved!" }))
        .catch(() => res.status(500).send({ message: "Error saving user" }));
});

app.get('/api/projects', async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: "Success" });
  });

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

io.on("connection", async (socket) => {
    console.log("A user connected");

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });

// Send a random book every 5 seconds
    setInterval(async () => {
        try {
            const count = await Project.countDocuments();
            const random = Math.floor(Math.random() * count);
            const book = await Project.findOne().skip(random);
            socket.emit("book", book);
        } catch (err) {
            console.error("Error fetching random book:", err);
        }
    }, 5000); 
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
