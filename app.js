const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
	res.send("app running inside docker");
});

app.listen(port, '0.0.0.0', () => {
	console.log(`http://localhost:${port}`);
});

