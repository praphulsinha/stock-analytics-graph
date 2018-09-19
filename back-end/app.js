//Author: Praphul Sinha

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const stock = require("./data");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Add headers for handing CORS, request will on continue down the middleware 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods", "OPTIONS, POST GET, DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
        res.status(200).json({});
    }
    next();
});

// sets middle ware - forward requests to router
app.use('/api/stocks', function(req, res, next){
    res.json(stock.merge());
    res.status(200);
});

// handle error
app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message : error.message
        }
    })
})

module.exports = app;