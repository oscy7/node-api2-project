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
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(!post) {
            res.status(404).json({
                message:'The post with the specified ID does not exist'
            })
        }else{
            res.json(post)
        }
    }catch (err) {
        res.status(500).json({
            message:"The posts information could not be retrieved",
            err:err.message,
            stack: err.stack
        })
    }
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