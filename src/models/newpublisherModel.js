const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');
// const ObjectId = mongoose.Schema.Types.ObjectId

const publisherSchema = new mongoose.Schema({
    publisher_id: String,
    name : String,
    headQuarter: String

}
    
)
module.exports = mongoose.model('newPublisher', publisherSchema)
