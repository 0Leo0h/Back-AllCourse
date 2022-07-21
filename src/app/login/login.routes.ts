import express, { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';

import { loginService } from './login.service';
import { stringify } from 'querystring';
import { EMAil } from '../email';

export const loginRouter = express.Router();
const loginservice = new loginService();

let database: string = 'Master_Core.dbo';

loginRouter.post(
    '/login/log',
    async (req: Request, res: Response, next: NextFunction) => {
        const username = req.body.usuario;
        const contrasena = req.body.contraseña;
        console.log(username, contrasena)
        const result = await loginservice.comprobarusername(username);
        console.log(result)
        const resultpass = bcrypt.hashSync(contrasena, 12);
        console.log(resultpass)
        if (result) {
            console.log(result[0].contrasena)
            const resultpass = bcrypt.compareSync(contrasena, result[0].contrasena);
            if (resultpass) {
                res.status(200).json({ data: result[0], mensaje: 'Sesion creada', sesion: true })
            } else {
                res.status(200).json({ mensaje: 'No se pudo iniciar sesion', sesion: false })
            }
        } else {
            res.status(200).json({ mensaje: 'No se encontro el username', sesion: false })
        }
    }
);

loginRouter.post(
    '/login/register',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const credenciales = req.body.login;
            const resultpass = bcrypt.hashSync(credenciales.contraseña, 12);
            const result = await loginservice.registrarusername(credenciales);
            console.log('Desss',result.insertId,credenciales)
            if (result.insertId) {
                const keys = await loginservice.registrosession(credenciales.username, resultpass, result.insertId, 'estudiante');
                console.log('>>>>>',keys);
                if (keys.insertId) {
                    res.status(200).json({ mensaje: 'ok' })
                }
            } else {
                res.status(400).json({ mensaje: 'Error en el query' })
            }
        } catch (error) {

            res.status(400).json(error);
        }
    }
);

loginRouter.post(
    '/login/registerT',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const credenciales = req.body.tutor;
            console.log(credenciales)
            const resultpass = bcrypt.hashSync(stringify(credenciales.documento), 12);
            console.log(credenciales, resultpass)
            await loginservice.actualizarEstadoTutor(credenciales.id);
            const data = credenciales.documento
            const keys = await loginservice.registrosession(credenciales.documento, resultpass, credenciales.id, 'tutor');
            await loginservice.actualizarEstadoTutor(credenciales.id);
            const email = new EMAil();
            console.log('hola')
            const result = await email.sendEmail(credenciales.correo, 'Hola', data);
            console.log(result, 'DAd', keys)

            if (result) {
                res.status(200).json({ mensaje: 'Tutor aceptado' })
            } else {
                res.status(400).json({ mensaje: 'Error en el query' })
            }
        } catch (error) {

            res.status(400).json(error);
        }
    }
)