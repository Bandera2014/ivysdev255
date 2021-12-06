console.log("hi")
const mongoose = require("mongoose")
const User = require('./User')

async function plugIn(){
    const c = await mongoose.connect("mongodb://localhost/testdb",()=>{
        console.log("connected")
        }, e=>console.log(e)
    )
}
plugIn()


run()
//different file for each schema
async function run(){
    try{
        // const user = await User.findById("id")
        // console.log(user)
        // const user = await User.find({name:"name"})
        // const user = User.find()
        // console.log(user)
        const user = await User.where("name").equals("nic")
        console.log(user)
    }
    catch(e){
        console.log(e.message)
    }
    console.log(user)
}



/*
    async function run(){
        const user = await User.create({name:"nic",age:26})
        user.name = "Sally"
        await user.save()
        // const user = new User({name:"nic",age:26})
        // user.save()
        console.log(user)

    }
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
*/