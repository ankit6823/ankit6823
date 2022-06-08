const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const BookController = require("../Controllers/bookController");
const authorModel = require('../models/authorModel');
//  const BookController= require("../controllers/bookController")

router.get("/test-me", function (_req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", BookController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )
router.post("/createAuthor", BookController. createAuthor  )


// router.get("/bookList",    BookController.bookList)
router.get ("/getBookofChetanBhagat", BookController.getBookofChetanBhagat)
router.get ("/authorofBook", BookController.authorofBook)
// router.get("/getXInrBook", BookController.getXInrBook)
// router.get("/getRandomBooks",BookController.getRandomBooks)
// router.get("/getBooksInYear",BookController.getBooksInYear)

// router.get("/getBooksData", BookController.getBooksData)

module.exports = router;