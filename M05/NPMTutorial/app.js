const express = require("express")

//express app
const app = express()

app.listen(3000)


//register view engine
app.set('view engine', 'ejs')  //use ejs to use the templates

//code will run from top to bottom, so 404 is the else statement at the end



app.get('/', (req, res) => {
     const blogs = [
          {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
          {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
          {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        ];
     res.render('index',{ title: 'Home', blogs});
});

app.get("/about",(req,res) =>{
     res.render('about',{ title: 'About'})
})

app.get('/blogs/create',(req,res)=>{
     res.render('create',{ title: 'Create'})
})

//404 - use doesn't need a route, this is an if all else fails situation
app.use((req,res)=>{
     res.status(404).render('404',{ title: '404'})
})



/*
     NO VIEWS
     app.get("/",(req,res) =>{
          // res.write('htmlstuff')
          // res.end()
          // res.send('<p>Home page</p>')
          res.sendFile("index.html",{root: __dirname})   
          //root of the computer to those files.  needs abs path
     })
     app.get("/about",(req,res) =>{
          res.send('<p>About page</p>')
     })

     //reroute
     app.get("/index",(req,res)=>{
          res.redirect("/")
     })

     //404 - use doesn't need a route, this is an if all else fails situation
     app.use((req,res)=>{
          res.status(404).sendFile("404.html",{root: __dirname})
     })
*/