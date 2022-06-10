const AuthorModel= require("../models/newauthorModel")
const newbookModel = require("../models/newbookModel")

const newAuthor= async function (req, res) {
    let author = req.body
    let authorId = author.author_id
    if(!authorId) {
        return res.send({msg: 'Author_id details is required'})
    }

    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

module.exports.createAuthor= newAuthor
module.exports.getAuthorsData= getAuthorsData