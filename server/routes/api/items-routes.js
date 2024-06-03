const router = require('express').Router();
const {
  createItem,
  deleteItem,
  editItem
} = require('../../controllers/Items-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createItem).put(authMiddleware);

router.route('/:itemId').put(authMiddleware, editItem);


router.route('/:itemId').delete(authMiddleware, deleteItem);

module.exports = router;