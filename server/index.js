const createApp = require('./app');
const logger = require('../log');

const getDonationFiguresService = require('./services/donationFiguresService');
const CharityClient = require('./clients/charityClient');

const donationFiguresService = getDonationFiguresService(
  new CharityClient(),
);

const app = createApp({
  logger,
  donationFiguresService,
});

module.exports = app;
