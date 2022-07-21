import express, { NextFunction, Request, Response } from 'express';
import { EMAil } from '../email';
import { usuarioService } from './usuario.service';


export const usuarioRouter = express.Router();
const usuarioservice = new usuarioService();


usuarioRouter.post(
    '/usuario/peticiones',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            let peticion = req.body.peticion;
            console.log(peticion)
            const Peticion = peticion.datos_peticion;
            const Tutor = peticion.datos_tutor;
            const Usuario = peticion.datos_usuario;
            let data = await usuarioservice.guardarPeticion(Peticion, Usuario.id, Tutor.id);
            const email = new EMAil();
            const result = await email.sendEmail(Tutor.correo, 'Solicitud de peticion');
            peticion = data.recordset;
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(200).json(data.RowDataPacket)
            }

            res.status(200)
        } catch (err) {
            res.status(400).json({ mensaje: 'Query error', err: err })
        }
    }
);

usuarioRouter.get(
    '/usuario/details/:id',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            let idUser = req.params.id;
            const result = await usuarioservice.detailsUsuario(parseInt(idUser));
            console.log(result)
            if (result) {
                res.status(200).json(result)
            } else {
                res.status(200).json(result.RowDataPacket)
            }
        } catch (err) {
            res.status(400).json({ mensaje: 'Query error', err: err })
        }
    }
);