const Blog = require('./models/blog')
const express = require("express")
const mongoose = require("mongoose")
const morgan = require('morgan')

//express app
const app = express()

const dbURI = 'mongodb+srv://GeeksInSneaks:SDEV255@cluster0.a4h2y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewURLParser:true,useUnifiedTopology:true}).then(
     (result) => app.listen(3000)).catch((err)=>console.log(err))

// app.listen(3000) //moved to the connect method


//register view engine
app.set('view engine', 'ejs')  //use ejs to use the templates
// middleware & static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use((req, res, next) => {
  res.locals.path = req.path
  next()
})

//code will run from top to bottom, so 404 is the else statement at the end

app.get('/blogs/create',(req,res)=>{
     res.render('create',{ title: 'Create'})
})

app.get('/add-blog', (req, res) => {
     const blog = new Blog({
       title: 'new blog',
       snippet: 'about my new blog',
       body: 'more about my new blog'
     })
   
     blog.save()
       .then(result => {
         res.send(result)
       })
       .catch(err => {
         console.log(err)
       })
})

app.get('/all-blogs', (req, res) => {
Blog.find()
     .then(result => {
     res.send(result)
     })
     .catch(err => {
     console.log(err)
     })
})

app.get('/single-blog', (req, res) => {
     Blog.findById('61b024a6f5cc371ac86d9375')
       .then(result => {
         res.send(result)
       })
       .catch(err => {
         console.log(err)
       })
})

app.get('/', (req, res) => {
     res.redirect('/blogs')
     
})

app.get('/blogs', (req, res) => {
     Blog.find().sort({ createdAt: -1 })  //sort({createdAt:-1}) brings the latest first
       .then(result => {
         res.render('index', { blogs: result, title: 'All blogs' })
       })
       .catch(err => {
         console.log(err)
       })
})

app.post('/blogs', (req, res) => {                //save it to the database from the form
     // console.log(req.body)
     const blog = new Blog(req.body)

     blog.save()
          .then(result => {
          res.redirect('/blogs') 
          })
          .catch(err => {
          console.log(err)
          })
})

app.get('/blogs/:id', (req, res) => {   //:id is the material in the url
     const id = req.params.id           //request object has it
     Blog.findById(id)
       .then(result => {
         res.render('details', { blog: result, title: 'Blog Details' })
       })
       .catch(err => {
         console.log(err)
       })
})
   
app.delete('/blogs/:id', (req, res) => {
     const id = req.params.id

     Blog.findByIdAndDelete(id)
          .then(result => {
          res.json({ redirect: '/blogs' })
          })
          .catch(err => {
          console.log(err)
          })
})

app.get("/about",(req,res) =>{
     res.render('about',{ title: 'About'})
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