const express = require('express');
const router = express.Router();
const translate = require('@vitalets/google-translate-api');
const async = require('async')
require('../db/conn')

const Stored = require("../model/stored");


router.post('/', async (req, res) => {


    try {
        var list = []

        /* const r = await translate(req.body.text, { to: req.body.lang });

        console.log(r.text);

        const user = new Stored({ text: req.body.text, lang: req.body.lang, translatedText: r.text });
        user.save().then(() => {
            res.status(201).send(user);
        }).catch((e) => {
            res.status(400).send(e);
        })
 */


        for (var i = 0; i < req.body.lang.length; i++) {

            const fill = await Stored.findOne({
                text: req.body.text,
                lang: req.body.lang[i]
            })
            
            if (!fill) {
                const r = await translate(req.body.text, { to: req.body.lang[i] });

                console.log(r.text);
                list.push(r.text);

                const user = new Stored({ text: req.body.text, lang: req.body.lang[i], translatedText: r.text });
                /* user.save().then(() => {
                    res.status(201).send(user);
                }).catch((e) => {
                    res.status(400).send(e);
                }) */

                await user.save()
            }
            else{
                list.push(fill.translatedText)
                
            }

        }
        res.status(201).send({
            text: req.body.text,
            translatedtext: list,
            language: req.body.lang
        });

    } catch (err) {
        console.error(err);
        res.status(400).send({
            error: err
        })
    }

});
module.exports = router;

