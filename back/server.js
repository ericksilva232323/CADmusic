//Dependências - Frameworks
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");


//Conexão com o SGBD MySQL
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'playlist'
});

//Rota de teste
const teste = (req, res) => {
    res.send("Back-end respondendo ");
}

//CRUD - create
const create = (req, res) => {
    let artist = req.body.artist;
    let art = req.body.art;
    let duration = req.body.duration;
    let album = req.body.album;
    let query = `INSERT INTO fichaplay(artist, art, duration, album) VALUE`;
    query += `('${artist}', '${art}', '${duration}', '${album}');`;
    con.query(query,(err, result)=>{
        if(err)
            res.json("http://127.0.0.1:5500/front/erro.html?erro=Provalmente o CPF já está cadastrado&err="+err.code);
        else
            res.json("http://127.0.0.1:5500/front/index.html");
    });
}

//CRUD - Read
const read = (req, res) => {
    con.query("SELECT * FROM Fichaplay ORDER BY id",(err, result)=>{
        if(err)
            res.json(err);
        else
            res.json(result);
    });
}

//Configurações de saída - FrontEnd
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//Rotas de Saída - FrontEnd
app.get("/", teste);
app.post("/fichaplay", create);
app.get("/fichaplay", read);

//Teste e porta no console
app.listen(3000, () => {
    console.log("Back-end respondendo na porta 3000");
});