'use strict'

var express = require('express');
var ProductoController = require('../controllers/producto');

var api = express.Router();
var md_auth = require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/root' });

api.post('/probando-controlador-root', ProductoController.pruebas);
api.post('/save', ProductoController.saveProducto);
api.post('/get', ProductoController.get);
// api.put('/update-root/:id', md_auth.ensureAuth, RootController.updateRoot);
// api.post('/upload-image-root/:id', [md_auth.ensureAuth, md_upload], RootController.uploadImage);
// api.get('/get-image-root/:imageFile', RootController.getImageFile);

module.exports = api;