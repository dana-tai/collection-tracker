const CollectionForm = require("../models/CollectionForm");

module.exports = {
    findAll: (req, res) => {
        CollectionForm.find()
            .then( collections => res.json(collections) )
            .catch ( err => res.json(err) )
    },

    findOne: (req, res) => {
        CollectionForm.findById(req.params.id)
            .then ( oneCollection => res.json(oneCollection) )
            .catch ( err => res.json(err) )
    },

    create: (req, res) => {
        CollectionForm.create(req.body)
            .then( newCollection => res.json(newCollection) )
            .catch ( err => res.json(err) )
    },

    update: (req, res) => {
        CollectionForm.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
            .then(updatedCollection => res.json(updatedCollection))
            .catch ( err => res.json(err) )
    },

    delete: (req, res) => {
        CollectionForm.deleteOne({_id: req.params.id})
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch ( err => res.json(err))
    }
}