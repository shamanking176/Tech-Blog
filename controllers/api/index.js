const router = require('express').Router();

//const apiRoutes = require('./api');
const userRoutes = require('./userRoutes');

const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes)
//router.use('api')

module.exports = router;