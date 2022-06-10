const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController");
const newpublisherController = require('../controllers/newpublisherController');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/newAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/newBook", bookController.createBook  )

router.post("/newPublisher", newpublisherController.publisherCreated)

// router.get("/getBooksData", bookController.getBooksData)


router.get("/getAuthorAndPublisherDetails", bookController.getBooksWithAuthorDetails)

module.exports = router;