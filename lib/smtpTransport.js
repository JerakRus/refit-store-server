import mailer from 'nodemailer';

const smtpTransport = mailer.createTransport( {
    service: 'Gmail',
    auth: {
        user: "refitstore47@gmail.com",
        pass: "89999899947RS",
    }
});
export default smtpTransport;