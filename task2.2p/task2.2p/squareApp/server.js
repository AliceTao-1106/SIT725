var express = require("express")
const path = require('path'); // Make sure to include this
var app = express()
var port = process.env.port || 3001;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET endpoint to calculate the square of a number
// Example: http://localhost:3000/square?num=5
app.get('/square', (req, res) => {
    const num = parseFloat(req.query.num);
    if (isNaN(num)) {
        return res.send("Error: Please provide a valid number using query parameter 'num'.");
    }
    const square = num * num;
    res.send(`The square of ${num} is: ${square}`);
});

app.get("/add", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.send("Error: Please provide valid numeric parameters 'num1' and 'num2'.");
    }
    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is: ${sum}`);
});

app.get("/subtract", (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        return res.send("Error: Please provide valid numeric parameters 'num1' and 'num2'.");
    }
    const difference = num1 - num2;
    res.send(`The difference between ${num1} and ${num2} is: ${difference}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});