import { connection } from '../../db';

export class tutorService {
    constructor() {
    }

    public listarTutor() {
        const q = `SELECT * FROM tutores t INNER JOIN usuarios u ON id_user = u.id WHERE t.estado = 1`;
        return connection.query(q)
    }

    public guardarTutor(tutor:any) {

        const q = `INSERT INTO usuarios (nombres,apellidos,num_doc,tipo_doc,pais,celular,correo,fecha_nacimiento,direccion,ciudad) VALUES('${tutor.nombres}','${tutor.apellidos}','${tutor.num_doc}','${tutor.tipo_doc}','${tutor.pais}','${tutor.celular}','${tutor.correo}','${tutor.fecha_nacimiento}','${tutor.direccion}','${tutor.ciudad}')`;

        return connection.query(q)
    }

    public guardarDTutor(tutor:any, id:number) {

        const q = `INSERT INTO tutores (especialidad,descripcion,disponibilidad,id_user,estado) VALUES('${tutor.especialidad}','${tutor.descripcion}','${tutor.disponibilidad}','${id}',0)`;

        return connection.query(q)
    }

    public listarTutoresPendientes() {
        const q = `SELECT * FROM tutores WHERE estado = 0`;
        return connection.query(q)
    }

    public detailsTutores(id:number) {
        const q = `SELECT * FROM tutores t INNER JOIN usuarios u ON id_user = u.id WHERE t.id = ${id}`;
        return connection.query(q)
    }

    public listarPeticionesPendientes(id:number,fecha:any) {
        const q = `SELECT * FROM peticiones WHERE estado = 1 AND id_tutor = ${id}  AND fecha_deseada >= ${fecha}`;
        console.log(q)
        return connection.query(q)
    }

    public actualizarEstadoPeticiones(res:number,id:number) {
        const q = `UPDATE peticiones SET estado = ${res} WHERE id = ${id}`;
        return connection.query(q)
    }

    public detailsUsuario(id: number) {
        const q = `SELECT * FROM usuarios WHERE id = ${id}`
        return connection.query(q);
    }
}