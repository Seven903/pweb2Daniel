import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";

const app = express();

const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basepath = path.join(__dirname, "public");

const carros = []

app.use(express.static(basepath))
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(basepath, "inicio.html"));
});

app.get("/carros", (req, res) => {
  res.sendFile(path.join(basepath, "carros.html"));
});

app.post("/carros",(req,res)=>{
    const dados = req.body;
   carros.push(dados)
   console.log(carros)

    res.status(200).json({messagem:"Dados recebidos com sucesso"})
})

app.get("/api/carros",(req,res)=>{
    res.send(JSON.stringify(carros))
})

app.get("/form", (req, res) => {
  res.sendFile(path.join(basepath, "form.html"));
});

app.listen(port,()=>{
    console.log(`Servidor rodando em http://127.0.0.1:${port}`)
});