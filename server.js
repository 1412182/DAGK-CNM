'use strict'
/**
 * Cấu hình cho server
 */
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const app = express();
app.use(express.static(path.resolve(__dirname, 'public')));
/**
 * Khai báo các controller
 */
const homeController = require('./Controller/HomeController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Khai báo sử dụng controller
 */
 app.use(homeController);

app.listen(PORT, () => {
    console.log(`app listen on port : ${PORT}`);
});