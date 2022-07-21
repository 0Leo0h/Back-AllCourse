import express, { Application } from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import { tutorRouter } from "./app/tutor/tutor.router";
import { loginRouter } from "./app/login/login.routes";
import { usuarioRouter } from "./app/usuario/usuario.routes";

const app: Application = express();
const port: number = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({ origin: ['http://localhost:4200'] }))

app.use('/api/', [tutorRouter, loginRouter, usuarioRouter])

app.listen(port, () => {
    console.log(`conectado al puerto ${port}`)
})