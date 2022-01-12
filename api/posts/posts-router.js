// implement your posts router here
//STEP 4:

const express = require('express')
const router = express.Router()
const Post = require('./posts-model')

router.get('/', (req, res) => {
    Post.find()
        .then(post => {
            res.json(post)
        })
        .catch(err => {
            res.status(500).json({
                message:"The posts information could not be retrieved",
                err:err.message,
                stack: err.stack
            })
        })
})
router.get('/:id', (req, res) => {
    res.json('asdfa')
})
router.post('/', (req, res) => {

})
router.delete('/:id', (req, res) => {

})
router.put('/:id', (req, res) => {

})
router.get('/:id/messages', (req, res)=> {

})

module.exports = router