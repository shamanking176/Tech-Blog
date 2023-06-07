const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    
    const posts = postData.map((post) => post.get({ plain: true }));

    
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        {
          model: Comment,
          attributes: ['body'],
       },
      ],
    });
    // const commentData = await Post.findAll();
    // const comment = commentData.map((comment) => comment.get({plain:true}));
    const post = postData.get({ plain: true });
    console.log(post);
     res.render('onepost', {
      post,
      // comment,
      logged_in: req.session.logged_in
    });
   
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    console.log(req.session.user_id);
    const postData = await Post.findAll({
      where: {userId: req.session.user_id},
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
      
    });

    
    const posts = postData.map((post) => post.get({ plain: true }));
   
    
    res.render('dashboard', { 
      posts, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/homepage', async (req, res) => {
  try {
    
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    
    const posts = postData.map((post) => post.get({ plain: true }));

    
    res.render('homepage', { 
      posts, 
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/newpost', async (req, res) => {
  try {
    
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    
    const posts = postData.map((post) => post.get({ plain: true }));

    
    res.render('newpost', { 
      posts, 
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/editpost', async (req, res) =>{
  try{
 const postData = await fetch(`/api/post/${postId}`, {
  include: [
    {
      model: User,
      attributes: ['name'],
    },
    {
      model: Comment,
      attributes: ['body'],
   },
  ],
 })
 const posts = postData.get({ plain: true });

 res.render('editpost', { 
  posts, 
  logged_in: true
});
} catch (err) {
res.status(500).json(err);
}

});

module.exports = router;
