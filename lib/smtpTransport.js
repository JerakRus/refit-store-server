import mailer from 'nodemailer';

const smtpTransport = mailer.createTransport( {
    service: 'Gmail',
    auth: {
        user: "jerakrus@gmail.com",
        pass: "heroreturn89153624789",
    }
});
export default smtpTransport;