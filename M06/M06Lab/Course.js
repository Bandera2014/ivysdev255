const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
     name: String,
     description: String,
     instructor: String,
     createdAt: {
          type: Date,
          immutable: true,
          default: () => Date.now()
     },
     updatedAt: {
          type: Date,
          immutable: true,
          default: () => Date.now()
     },
     // bestFriend: mongoose.SchemaTypes.ObjectId,
     // hobbies:[String],
     // address:addressSchema
     // // address:{
     // //     street:String,
     // //     city:String
     // // }
})

module.exports = mongoose.model("Course",courseSchema)
