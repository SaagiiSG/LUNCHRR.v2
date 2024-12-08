import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import {Test_h, s_name, a_name, d_name, Test_d} from './database.js'
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'DELETE'],  
  credentials: true
}));

app.use(bodyParser.json());
app.use(express.json());

app.use(session({
  secret: 'yourSecret', // Replace with a strong secret in production
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set to true in production if using HTTPS
}));

// Your routes
app.get("/", async(req, res) => {
  const test = await Test_h();
  res.json(test);
});

app.get("/dashboard", async(req, res) => {
  const test = await Test_d();  
  res.json(test);
});

app.get('/userName/:id', async (req, res) => {
  const id = req.params.id;
  const names = await s_name(id);
  res.send(names);
});

app.post("/add", async(req, res) => { 
  const { name, username, card_id, phone } = req.body;
   
  const test = await a_name(name, username, card_id, phone);
  console.log(test)
  res.status(201).send(test);
}); 

app.delete("/delete", async(req, res)=>{ 
  const id = req.body;
 console.log(id.id)
  if (!Array.isArray(id.id)) {
    return res.status(400).send({ error: "Invalid input: 'id' must be an array." });
  }

  try {
    const result = await d_name(id.id);
    res.status(201).send(result);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred.");
  }
})

app.post("/login", async(req, res) => {
  const { Name, Password } = req.body;
  const name_login = await s_name(Name, Password);
  console.log(name_login);
 // Example of setting a session variable
  res.status(201).send(name_login);
});

app.post('/logout', (req, res) => {
    console.log("Logout endpoint hit"); // Logs every time this endpoint is accessed
    req.session.destroy(err => {
      if (err) { 
        console.log("Error destroying session:", err);
        return res.status(500).send("Failed to log out.");
      }
      res.clearCookie("sessionId");
      res.sendStatus(200);
    });
  });
  

app.listen(8080, () => {
  console.log("Server started");
});
