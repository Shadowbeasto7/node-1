import express from 'express';

const users = [
    { username: "nkumar", password: "1234" },
    { username: "jdoe", password: "abcd" },
    { username: "asmith", password: "xyz" }
];
const app = express();
app.use(express.json());
console.log("i am here");
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log("i am here");
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ success: true, message: "Login successful" });
    } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
    }
});

app.listen(30000, () => {
    console.log('Server running on port 30000');
});

app.get('/user/ ', (req, res) => {
    const userId = req.query.id;
    const user = users.find(u => u.username === userId);
    if (user) {
        res.json({ success: true, user });
    } else {
        res.status(404).json({ success: false, message: "User not found" });
    }
});