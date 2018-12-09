const express = require('express');
const app = express();
const indexRouter = express.Router();
/*const User =require('../models/users');
const Product =require('../models/products');*/


/* GET home page. */
/*indexRouter.route('/').get(function (req, res) {
    User.find(function (err, serverports){
        if(err){
            console.log(err);
        }
        else {
            res.json(serverports);
        }
    });
});

indexRouter.route('/product').get(function (req, res) {
    Product.find(function (err, serverports){
        if(err){
            console.log(err);
        }
        else {
            res.json(serverports);
        }
    });
});*/

module.exports = indexRouter;