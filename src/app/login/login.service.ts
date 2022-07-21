import { connection } from '../../db';

export class loginService {
    constructor() {
    }

    public comprobarusername(username:any){
        const q = `SELECT * FROM credenciales where username='${username}'`
        console.log(q)
        return connection.query(q)
    }

    public registrarusername(datos: any) {
        const q = `INSERT INTO usuarios (nombres,apellidos,num_doc,tipo_doc,pais,celular,correo,fecha_nacimiento,direccion,ciudad) VALUES('${datos.nombres}','${datos.apellidos}','${datos.num_doc}','${datos.tipo_doc}','${datos.pais}','${datos.celular}','${datos.correo}','${datos.fecha_nacimiento}','${datos.direccion}','${datos.ciudad}')`;
        return connection.query(q)
    }

    public registrosession(username: any, contraseña:any, id_user:any, rol:any) {
        const q = `INSERT INTO credenciales (username,contrasena,estado,id_user,rol) values('${username}','${contraseña}','1','${id_user}','${rol}')`;
        return connection.query(q)
    }

    public actualizarEstadoTutor(id_user:any) {
        const q = `UPDATE tutores SET estado = '1' WHERE id = ${id_user}`;
        return connection.query(q)
    }
    
}