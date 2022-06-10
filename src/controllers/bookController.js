// const authorModel = require("../models/newauthorModel")
const bookModel= require("../models/newbookModel")

const newBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getAuthorAndPublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id','publisher_id')
    res.send({data: specificBook})

 }

module.exports.createBook= newBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getAuthorAndPublisherDetails
