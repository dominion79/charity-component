const config = require('../config');

function getDonationFiguresService(httpClient) {
  async function getFigures() {
    try {
      const response = await httpClient.get(config.api.coopMockTest);
      return response;
    } catch (ex) {
      return null;
    }
  }

  async function calculatePercentage() {
    const figures = await getFigures();
    const increase = figures.target - figures.raised;
    return (increase / figures.target) * 100;
  }

  return {
    getFigures,
    calculatePercentage,
  };
}

module.exports = getDonationFiguresService;
