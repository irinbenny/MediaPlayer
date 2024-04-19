//import json-server library
const jsonServer = require('json-server')
//creater server using create function
const mediaPlayerServer = jsonServer.create()
//create path for db.json file
const router =jsonServer.router('db.json')
//create middleware to convert json into js
const middleware = jsonServer.defaults()

//connect
mediaPlayerServer.use(middleware)//middleware topil vannam
mediaPlayerServer.use(router)

//setup plan for the server
const port = 4000 || process.env.PORT

//run the server - 
mediaPlayerServer.listen(port,()=>{
    console.log('MediaPlayer server running successfully');
})