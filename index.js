const app = require('express')();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<H1>Hello from HOME</H1>');
})

app.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`);
});

