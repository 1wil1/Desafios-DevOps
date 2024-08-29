const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello, Educacionit. Desafio9!' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

module.exports = app; // Exporting app for testing purposes
