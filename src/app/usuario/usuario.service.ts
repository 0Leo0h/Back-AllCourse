import { connection } from '../../db';

export class usuarioService {
    constructor() {
    }

    public guardarPeticion(peticion: any, id_user: number, id_tutor: number) {

        const q = `INSERT INTO peticiones (fecha_deseada,hora,descripcion,id_user,id_tutor,estado) VALUES('${peticion.fecha_deseada}','${peticion.hora}','${peticion.descripcion}','${id_user}','${id_tutor}','1')`;

        return connection.query(q);
    }

    public detailsUsuario(id: number) {
        const q = `SELECT * FROM usuarios WHERE id = ${id}`
        return connection.query(q);
    }
}