let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let itemSchema = require('../models/Item');

//CRUD

//CREATE
router.route('/create').post((req, res, next) => {
    itemSchema.create(req.body, (error, data) => {
        if(error){
            return next(error);
        }else{
            res.json(data)
        }
    });
});

//READ
router.route('/').get((req, res, next) => {
    itemSchema.find({ userId: req.query.userId }, (error, data) => {
        if(error){
            return next(error);
        }else{
            res.json(data)
        }
    })
})

//READ Only
router.route('/:id').get((req, res, next) => {
    itemSchema.findById(req.params.id,(error, data) => {
        if(error){
            return next(error);
        }else{
            res.json(data);
        }
    })
})

//UPDATE
router.route('/edit/:id').put((req, res, next) => {
    itemSchema.findByIdAndUpdate(req.params.id,{$set: req.body}, (error, data) => {
        if(error){
            return next(error);
        }else{
            res.json(data);
        }
    })
})

//DELETE
router.route('/delete/:id').delete((req, res, next) => {
    itemSchema.findByIdAndRemove(req.params.id,(error, data) => {
        if(error){
            return next(error);
        }else{
            res.status(200).json({
                message: data
            })
        }
    })
})

module.exports = router;