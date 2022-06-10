const newpublisherModel = require ("../models/newpublisherModel.js");

const newPublisher= async function (req, res) {
    let publisher= req.body
    let publisherId = publisher.publisher_id
    if(!publisherId) return res.send({msg: 'publisher_id details is required'})
    let publisherCreated = await newpublisherModel.create(publisher)
    res.send({data: publisherCreated})
}
const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}
module.exports.publisherCreated = newPublisher
module.exports.getAuthorsData = getAuthorsData