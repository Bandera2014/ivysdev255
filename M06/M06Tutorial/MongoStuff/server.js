const http = require("http")
const fs = require("fs")
const _ = require('lodash')

const server = http.createServer((request,response)=>{
     //lodash
     const num = _.random(0,20)
     console.log(num)
     const greet = _.once(() =>{
          console.log("hello")
     })


     response.setHeader("Content-Type","text/html")

     let path = "/"
     switch(request.url){
          case ('/'):
          case ('/home'):  //redirect means different code
               response.statusCode = 301;
               response.setHeader('Location',"/about");
               response.end()
               break
          case ('/index'):
               //when you hit this, do your backend stuff like db material
               response.statusCode = 200;
               path='index.html'
               break
          case ('/about'):
               response.statusCode = 200;
               path='about.html'
               break
          default:
               response.statusCode = 404;
               path="404.html"
               break
     }

     fs.readFile(path,(err,data) =>{
          if (err){
               console.log(err)
               response.end() //make sure to end it no matter what
          }
          else{
               
               response.write(data)
               response.end()
               //or respnose.end(data)
          }
     })

     /*set header content type
          response.setHeader("Content-Type","text/plain")
          //write the response or what is returned
          response.write("hello,ninjas")
          //end the response or send it.
          response.end()

          return HTML
          response.setHeader("Content-Type","text/html")
          response.write("<p>hello,ninjas</p>")
          response.write("<p>another line</p>")
          you can write anything in this that is a string
     */

});

server.listen(3000,'localhost',() =>{
     console.log('listening for requests on port 3000');
});