import express from 'express';
const port = process.env.PORT || 3000;
import {annoncesController} from "./controllers/anonces.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./static'));

app.get("/",(req, res) => {
    res.status(200).sendFile("index.html");
});

// routes api

app.get("/api/get_annonces", annoncesController.getAllAnnonces)

app.get("/api/test", (req, res) => {res.json({message: 'tamere'})})

app.all("*",(req, res) => {
    res.status(404).send('<h1>Error 404 : Page not found</h1>');
});


app.listen(port,()=>{});