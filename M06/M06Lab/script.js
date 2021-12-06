console.log("hi")
const mongoose = require("mongoose")
const User = require('./User')
const Course = require('./Course')

async function plugIn(){
    const c = await mongoose.connect("mongodb://localhost/testdb",()=>{
        console.log("connected")
        }, e=>console.log(e)
    )
}
plugIn()
// createCourse()
// updateCourse()
removeCourse()

async function pullData(){
    try{
        // const user = await User.findById("id")
        // console.log(user)
        // const user = await User.find({name:"name"})
        // const user = User.find()
        // console.log(user)
        // const user = await User.where("name").equals("nic")
        const course = await Course.where("name").equals("SDEV255")
        console.log(course)
    }
    catch(e){
        console.log(e.message)
    }
    console.log(user)
}
async function create(){
    const user = await User.create({name:"nic",age:26})
    user.name = "Sally"
    await user.save()
    // const user = new User({name:"nic",age:26})
    // user.save()
    console.log(user)

}
async function createCourse(){
    const course = await Course.create({
        name:"SDEV255",
        description:"Web Apps"
    })
    await course.save()
    console.log(course)
}
async function updateCourse(){
    let id = "61ae79a538b9e08f56c94edb"
    const course = await Course.findById(id)
    course.description = "Sally"
    await course.save()
    console.log(course)
}
async function removeCourse(){
    const course = await User.deleteOne({
        name: "SDEV255"
    })
    console.log(course)
}
// run()
//different file for each schema
// const user = await User.create({
//     name: "bob",
//     age:26,
//     hobbies: ["hob1","hob2"],
//     address:{
//         street:"Main St"
//     },
// })
// await user.save()
// console.log(user)