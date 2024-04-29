import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./static'));

app.get("/",(req, res) => {
    res.status(200).sendFile("index.html");
});

app.all("*",(req, res) => {
    res.status(404).send('<h1>Error 404 : Page not found</h1>');
});


app.listen(3000,()=>{});