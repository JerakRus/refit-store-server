import mailer from 'nodemailer';

const smtpTransport = mailer.createTransport( {
    service: 'Gmail',
    host: 'smtp.gmail.com',
    auth: {
        type: 'OAuth2',
            user: "refitstore47@gmail.com",
            clientId: '192566730318-mqmm4mt2odndpntcrv0uveskqald0iid.apps.googleusercontent.com',
            clientSecret: '_BvT3vE0ptINCyl0BNZY0QRO',
            refreshToken: '1/ZrZz7O9xHdEQz9ZWYM7fIMTeonm5tsWhljRPQ99PtvA',
    }
});
export default smtpTransport;