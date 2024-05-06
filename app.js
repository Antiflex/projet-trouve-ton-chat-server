import express from 'express';
import cors from 'cors';
const port = process.env.PORT || 3000;
import {annoncesController} from "./controllers/anonces.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./static'));

const options = {
    origin: '*',
}

app.use(cors(options))


app.get("/",(req, res) => {
    res.status(200).sendFile("index.html");
});

// routes api

app.get("/api/get_annonces", annoncesController.getAllAnnonces)

app.get("/api/test", (req, res) => {res.json({message: 'tamere'})})


app.all('*',function(req,res,next)
{
    if (!req.get('Origin')) return next();

    res.set('Access-Control-Allow-Origin','*');

    if ('OPTIONS' === req.method) return res.send(200);

    next();
});


app.all("*",(req, res) => {
    res.status(404).send('<h1>Error 404 : Page not found</h1>');
});


app.listen(port,()=>{});