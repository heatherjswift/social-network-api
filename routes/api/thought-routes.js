const router = require('express').Router();

const {
  getAllThought,
  getThoughtById,
  updateThought, 
  addThought,
  removeThought
} = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThought)
  .post(addThought);

router
// :thoughtId?
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// api/thoughts/:thoughtId/reactions
// router
//   .route('/:id/reactions')
//   .post(addReaction)
//   .delete(removeReaction);

module.exports = router;