const CollectionController = require("../controllers/collection")

module.exports = app => {
    app.get("/api/collections", CollectionController.findAll);
    app.post("/api/collections", CollectionController.create);
    app.get("/api/collections/:id", CollectionController.findOne);
    app.put("/api/collections/:id", CollectionController.update);
    app.delete("/api/collections/:id", CollectionController.delete);
}