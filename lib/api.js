import express from "express";
import path from 'path';
import { Item } from "./item";
import { Post } from './post';
import smtpTransport from './smtpTransport';

export const routerItems = express.Router();
export const routerPosts = express.Router();
export const routerSMTP = express.Router();
export const mainPage = express.static(path.join(__dirname, '..', 'buildClient'));
export const adminPage = express.static(path.join(__dirname, '..', 'buildAdmin'));

routerItems.get('/items', (req, res) => {
    Item.find({})
        .then(items => {
            res.send(items);
        });
});
routerItems.post('/items', (req, res) => {
    Item.create(req.body)
        .then(item => {
            res.send(item);
        }).catch(err => res.send(err));
});
routerItems.put('/items/:id', (req, res) => {
    Item.findOneAndUpdate({_id:req.params.id}, req.body)
        .then(() => {
                Item.findOne({_id:req.params.id })
                    .then(item => {
                        res.send(item);
                    });
        });
});
routerItems.delete('/items/:id', (req, res) => {
    Item.deleteOne({_id:req.params.id})
        .then(item => {
            res.send(item);
        });
});



routerPosts.get('/posts', (req, res) => {
    Post.find({})
        .then(items => {
            res.send(items);
        });
});
routerPosts.post('/posts', (req, res) => {
    Post.create(req.body)
        .then(item => {
            res.send(item);
        }).catch(err => res.send(err));
});
routerPosts.put('/posts/:id', (req, res) => {
    Post.findOneAndUpdate({_id:req.params.id}, req.body)
        .then(() => {
            Post.findOne({_id:req.params.id })
                .then(item => {
                    res.send(item);
                });
        });
});
routerPosts.delete('/posts/:id', (req, res) => {
    Post.deleteOne({_id:req.params.id})
        .then(item => {
            res.send(item);
        });
});



routerSMTP.post('/sendToMail', (req, res) => {
    const { contact, order } = req.body;
    const orderText = order.reduce((acc, item) => {
        const text =
        `Наименование: ${item.title}\nФирма: ${item.firm}\nМодель устройства: ${item.model}\nЦена за 1 шт.: ${item.price}\nКоличество штук: ${item.addCount}\n`;
       return [...acc, text]
    }, []).join('\n');
    const totalPrice = order.reduce((acc, item) => acc + item.price * item.addCount, 0);

    const mail = {
        from: 'RefitStore Shop',
        to: "refitstore47@mail.ru",
        subject: "Заказ с сайта RefitStore",
        text:
        `Поступил новый заказ!\n${contact.name} ${contact.number}.\n\n${orderText}\n\nИтоговая сумма: ${totalPrice} рублей.\nПожелания к заказу: ${contact.text ? contact.text : 'Пожеланий нет'}.`,
    };

    smtpTransport.sendMail(mail, (err, response) => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(`email send ${response.message}`);
        }
    });
});