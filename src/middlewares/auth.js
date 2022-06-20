const jwt = require("jsonwebtoken");

const validateToken = function(req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    console.log(token);
    
    // If a token is present then decode the token with verify function
    // verify takes two inputs:
    // Input 1 is the token to be decoded
    // Input 2 is the same secret with which the token was generated
    // Check the value of the decoded token yourself
    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken) {
      return res.send({ status: false, msg: "token is invalid" });
    } else{
      next()
    }
   
  }


    const authorizeUser = async function (req, res) {
      let message = req.body.message
      // Check if the token is present
      // Check if the token present is a valid token
      // Return a different error message in both these cases
      let token = req.headers["x-auth-token"]
      if(!token) return res.send({status: false, msg: "token must be present in the request header"})
      let decodedToken = jwt.verify(token, 'functionup-thorium')
  
      if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
      
      //userId for which the request is made. In this case message to be posted.
      let userToBeModified = req.params.userId
      //userId for the logged-in user
      let userLoggedIn = decodedToken.userId
  
      //userId comparision to check if the logged-in user is requesting for their own data
      if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
  
      let user = await userModel.findById(req.params.userId)
      if(!user) return res.send({status: false, msg: 'No such user exists'})
      
      let updatedPosts = user.posts
      //add the message to user's posts
      updatedPosts.push(message)
      let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})
  
      //return the updated user document
      return res.send({status: true, data: updatedUser})
  }


module.exports.validateToken = validateToken
module.exports.authorizeUser = authorizeUser