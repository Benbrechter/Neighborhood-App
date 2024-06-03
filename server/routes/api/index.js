const router = require('express').Router();
const userRoutes = require('./user-routes');
const itemsRoutes = require('./items-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/', itemsRoutes);
router.use('/post', postRoutes)

module.exports = router;