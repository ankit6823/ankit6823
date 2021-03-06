const authorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}


const createAuthor = async function (req ,res){
    
    let data = req.body
    let savedData = await authorModel.create(data)
  
   
    res.send({msg:savedData})
}
const getBookofChetanBhagat = async function (req ,res){
    let data = await authorModel.find({author_name:"Chetan Bhagat"}).select("author_id")
    let bookData = await BookModel.find({author_id:data[0].author_id})


    
    
    res.send({msg:bookData})
  
   
    
}

let authorofBook = async(req,res) =>{
    let data = await BookModel.findOneAndUpdate({name:"Two states"},{$set:{prices:100}},{new:true})
    let authorData = await authorModel.find({author_id:data.author_id}).select("author_name")
    let price = data.price
    res.send({msg:authorData,price})
}


// const getBooksInYear = async function (req ,res){
//     let publishingYear = req.body.year
    
//     let list = await BookModel.find({year: publishingYear})
//     res.send({msg:list})
// }


// const getXInrBook = async function (req ,res){
    
//     let list = await BookModel.find({"prices.indianPrice": {$eq: "200INR"}},{"prices.indianPrice" : {$eq: "500INR"}},)
    
//     res.send({msg:list})
// }

// const  getRandomBooks = async function (req ,res){
    
//     let list = await BookModel.find({stockAvailable:"true",totalPages:"500"})
    
//     res.send({msg:list})
// }



// const getBooksData= async function (req, res) {

    // let allBooks= await BookModel.find( ).count() // COUNT

    // let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND
    
    // let allBooks= await BookModel.find( { 
    //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
    // } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

    // let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

    // PAGINATION 
    // let page= req.query.page
    // let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

    // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


    // let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 
    
    // let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
    // sales : { $in: [10, 17, 82] }
    
    // let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})
    
    //  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
    //  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


    //  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
    //  let allBooks= await BookModel.findOne( {sales: 10}) 
    //  let allBooks= await BookModel.find( {sales: 10}) 
    
    

    // //  update (not covered: - findByIdAndUpdate | updateOne )
    // let allBooks= await BookModel.update(   
    //     {  sales: {$gt: 10}  }, //condition
    //     { $set: { isPublished: true} } // the change that you want to make
    //     ) 



    // REGEX
    // let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
    // let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
    // let allBooks= await BookModel.find( { bookName:  /5$/  }) 
    // let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) 
    
    // ASYNC AWAIT
    
//     let a= 2+4
//     a= a + 10
//     console.log(a)
//     let allBooks= await BookModel.find( )  //normally this is an asynchronous call..but await makes it synchronous


//     // WHEN AWAIT IS USED: - database + axios
//     //  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
//     console.log(allBooks)
//     let b = 14
//     b= b+ 10
//     console.log(b)
//     res.send({msg: allBooks})
// }


module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.getBookofChetanBhagat = getBookofChetanBhagat
module.exports.authorofBook = authorofBook


// module.exports.bookList = bookList
// module.exports.getXInrBook= getXInrBook
// module.exports.getRandomBooks=getRandomBooks
// module.exports.getBooksInYear = getBooksInYear

// module.exports.getBooksData= getBooksData