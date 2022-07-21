import nodemailer from 'nodemailer';

export class EMAil{
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            secure: false,
            port: 587,
            service: 'Gmail',
            tls:{ciphers: 'SSLv3'},
            requireTLS: true,
            auth: { user: 'ledahepa@gmail.com', pass: 'qsqr exob inba lsaq' },
        });
    }

    async sendEmail(
        email: string,
        subject: string,
        data?: any,
    ) {
        let html
        console.log(data)
        if(!data){
            html = `<p>Usted recibio una nueva solicitud en AllCourse</p>`
        } else {
            if(data==1){
                html = `Tu peticion fue aceotada`
            }
            html = `<p>Bienvenido a AllCourse. <br> Sus credenciañes de entrada son: <br> Usuario: ${data} <br> Contraseña: ${data}</p>`;
        }

        const mailOptions: nodemailer.SendMailOptions = {
            from: 'ledahepa@gmail.com',
            to: email,
            subject: subject,
            html: html,
        };

        return this.transporter.sendMail(mailOptions);
    }
}