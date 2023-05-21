const router = require('express').Router();
const { Comment} = require('../../models');

router.post('/post', async (req, res) => {
    try {
      const commentData = await Comment.create({
        ...req.body,
      });
  
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/comment', async (req, res) => {
    try{
      console.log("****************GETTING ALL INFO****************")
      const comments = await Comment.findAll();
      res.status(200).json(comments);
    }catch(err){
      res.status(500).json(err);
    }
  
  
  });
  
  
  
  router.delete('/:id', async (req, res) => {
    
    try{
      const commentData = await Comment.destroy({
        where: { id: req.params.id}
      });

      res.status(200).json(commentData)
    }catch(err){
      res.status(500).json(err);
    }
  });
  
  
  
  
  
  
    module.exports = router;