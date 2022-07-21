import express, { NextFunction, Request, Response } from 'express';
import { tutor } from './tutor.interface';
import { tutorService } from './tutor.service';
import { calendar } from '@googleapis/calendar';
import { google } from 'googleapis'
import { EMAil } from '../email';


export const tutorRouter = express.Router();
const tutorservice = new tutorService();
const auth = new google.auth.JWT(
    'ledahepa@gmail.com',
    undefined,
    'qsqr exob inba lsaq',
    undefined
);

tutorRouter.get(
    '/tutor/lista',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log('Holaa')
            const result = await tutorservice.listarTutor();
            console.log(result)
            //calendar('v3').events.insert({ calendarId: 'Calendar', key: 'AIzaSyBp9XqXo9g36KYgefDl4jsCpTxs-1Wb0BE'})
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

tutorRouter.post(
    '/tutor/crear',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            let tutor: tutor = req.body.tutor;
            console.log(tutor)
            let data = await tutorservice.guardarTutor(tutor);
            tutor = data.recordset;
            console.log(tutor)
            console.log(data.insertId)
            let data2 = await tutorservice.guardarDTutor(tutor,data.insertId)
            if (data2) {
                res.status(200).json(data2)
            } else {
                res.status(200).json(data2.RowDataPacket)
            }

            res.status(200)
        } catch (err) {
            res.status(400).json({ mensaje: 'Query error', err: err })
        }
    }
);

tutorRouter.get(
    '/tutor/pendiente',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await tutorservice.listarTutoresPendientes();
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

tutorRouter.get(
    '/tutor/details/:id',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            let idTutor = req.params.id;
            const result = await tutorservice.detailsTutores(parseInt(idTutor));
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

tutorRouter.get(
    '/tutor/peticiones/:id',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            let idTutor = req.params.id;
            
            const fecha = new Date();
            fecha.toLocaleDateString();
            const result = await tutorservice.listarPeticionesPendientes(parseInt(idTutor),fecha.toLocaleDateString());
            console.log(result)
            if (result) {
                res.status(200).json(result)
            } else {
                res.status(200).json(result.RowDataPacket)
            }
            res.status(200)
        } catch (err) {
            res.status(400).json({ mensaje: 'Query error', err: err })
        }
    }
);

tutorRouter.post(
    '/tutor/peticiones',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            let respuesta = req.body.resPeticion;
            console.log(respuesta)
            const User = await tutorservice.detailsUsuario(parseInt(respuesta.id_user));
            console.log(User)
            const data = await tutorservice.actualizarEstadoPeticiones(parseInt(respuesta.res),parseInt(respuesta.id));
            res = data.recordset;
            const email = new EMAil();
            console.log('hola')
            const result = await email.sendEmail(User.correo, 'Hola', 1);
            console.log(res)
            console.log(data.OkPacket.insertId)
            if (data) {
                res.status(200).json(data)
            } else {
                res.status(200).json(data.RowDataPacket)
            }

            res.status(200)
        } catch (err) {
            res.status(400).json(err)
        }
    }
);