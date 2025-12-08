import express from 'express';
import cors from 'cors';
import users from "./user.js";

const app = express();

app.use(cors());
app.use(express.json()); 

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("Server is Ready");
})

app.get("/api/user", (req, res) => {
    res.send(users);
})

app.post("/api/login", async (req, res) => { 
    try {
        var data = req.body;
        
        const user = users.find(user => user.username === data.username);
        
        if (!user) {
            return res.status(401).json({error: 'Invalid credentials'});
        }
        
        if (user.password != data.password) {
            return res.status(401).json({error: 'Invalid credentials'});
        }

        return res.json({
            status: 200,
            message: "login realizado com sucesso",
            user: user});


    } catch(err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error'});
    }
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Serve at http://localhost:' + port);
});