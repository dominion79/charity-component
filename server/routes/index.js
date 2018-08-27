const express = require('express');

module.exports = function Index({ logger, donationFiguresService }) {
  const router = express.Router();

  router.get('/', async (req, res) => {
    logger.info('GET index');

    const donationFigures = await donationFiguresService.getFigures();
    const percentage = await donationFiguresService.calculatePercentage();

    res.render('pages/index', { donationFigures, percentage });
  });

  return router;
};
