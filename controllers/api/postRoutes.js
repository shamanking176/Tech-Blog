const router = require('express').Router();
const { Post, Comment} = require('../../models');


router.post('/', async (req, res) => {
    try {
      const postData = await Post.create({
        ...req.body,
      });
  
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/post', async (req, res) => {
    try{
      console.log("****************GETTING ALL INFO****************")
      const posts = await Post.findAll();
      res.status(200).json(posts);
    }catch(err){
      res.status(500).json(err);
    }
  
  
  });
  
  
  
  router.delete('/:id', async (req, res) => {
    
    try{
      const postData = await Post.destroy({
        where: { id: req.params.id}
      });

      res.status(200).json(postData)
    }catch(err){
      res.status(500).json(err);
    }
  });
  
  // router.update('/:id', async (req, res) => {
  // Post.update(req.body,{

  // })
  // });
  
  
    module.exports = router;
  