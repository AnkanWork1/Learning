const express = require('express');
const app = express();
const port = 8080;

// Route with URL parameters
app.get('/users/:userId', (req, res) => {
    res.send(`User profile for ID: ${req.params.userId}`);
});

// Route with multiple parameters
app.get('/users/:userId/posts/:postId', (req, res) => {
    res.send(`
    <h2>User and Post Information</h2>
    <p>User ID: ${req.params.userId}</p>
    <p>Post ID: ${req.params.postId}</p>
  `);
});

app.get("/products/:category", (req, res) => {
    res.send(`Viewing all products in category ${req.params.category}`);
});

app.get("/products/:category/:product", (req, res) => {
    res.send(`Viewing product ${req.params.product} in category ${req.params.category}`);
});


// Parameter with numeric pattern
app.get('/items/:itemId', (req, res) => {
    const id = req.params.itemId;

    if (!/^\d+$/.test(id)) {
        return res.status(400).send("Item ID must be numeric");
    }

    res.send(`Item ID must be numeric: ${id}`);
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
