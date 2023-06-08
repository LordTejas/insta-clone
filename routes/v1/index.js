const router = require('express').Router();
const usersRoutes = require('./users.routes');
const postsRoutes = require('./posts.routes');

router.use('/users', usersRoutes);
router.use('/posts', postsRoutes);

module.exports = router;