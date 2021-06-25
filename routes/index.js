const router = require('express').Router();
// import all of the API routes from /api/index.js, index.js isn't included because it's implied
const apiRoutes = require('./api');

// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>404 Error!</h1>');
});

module.exports = router;
