var express = require('express');
var router = express.Router();
var controller = require("../controllers/controller")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/menu", controller.menuRender)
router.get("/indice", controller.mainRender)
router.get("/detalle/:id", controller.detalle)
module.exports = router;
