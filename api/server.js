// implement your server here
// require your posts router and connect it here

//STEP 1 

const express = require('express')

const server = express();

const postsRouter = require('./posts/posts-router')

server.use(express.json())

//STEP 3:
server.use('./api/post', postsRouter)

server.use('*', (req, res) =>{
    res.status(404).json({
        message:'Not Found!!'
    })
})

module.exports = server