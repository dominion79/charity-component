const express = require('express');

module.exports = function Index({ logger, donationFiguresService, calculatePercentage }) {
  const router = express.Router();

  router.get('/', async (req, res) => {
    logger.info('GET index');

    const donationFigures = await donationFiguresService.getFigures();
    const percentage = await calculatePercentage(donationFigures.raised, donationFigures.target);

    res.render('pages/index', { donationFigures, percentage });
  });

  return router;
};
