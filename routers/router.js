const express = require("express");
const controllers = require("../controllers/controllers");
const middleware = require("../middleware_express/middleware");
const bodyParser = require("body-parser");

const router = express.Router();

router.get("/", controllers.getAllItem, middleware.confirmApiKey);

router.get("/:id", controllers.getOneItem, middleware.confirmApiKey);

router.post("/", controllers.createItem, middleware.confirmApiKey);

router.put("/:id", controllers.updateItem, middleware.confirmApiKey);
    
router.delete("/:id", controllers.deleteItem, middleware.confirmApiKey);

module.exports = router;