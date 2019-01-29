import mailer from 'nodemailer';
import xoauth2 from 'xoauth2';

const smtpTransport = mailer.createTransport( {
    service: 'Gmail',
    host: 'smtp.gmail.com',
    auth: {
        xoauth2:xoauth2.createXOAuth2Generator({
            user: "refitstore47@gmail.com",
            clientId: '192566730318-mqmm4mt2odndpntcrv0uveskqald0iid.apps.googleusercontent.com',
            clientSecret: '_BvT3vE0ptINCyl0BNZY0QRO',
            refreshToken: '1/ZrZz7O9xHdEQz9ZWYM7fIMTeonm5tsWhljRPQ99PtvA',
            //accessToken: 'ya29.GlugBticiqUMdODoRXFJG3gbFW2BdK4WWrdfJHRVZGYZLvHdwZ4Rd_E7REL0Vqgn1pfn-V96ZAtYsLrj8ih3s2qd27FIPv7Gg3jbM6Mtfc3NqF6lxbvTqzgiGt7w',
        })
    }
});
export default smtpTransport;