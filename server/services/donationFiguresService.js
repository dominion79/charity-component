const config = require('../config');

function getDonationFiguresService(httpClient) {
  async function getFigures() {
    try {
      return await httpClient.get(config.api.coopMockTest);
    } catch (ex) {
      return null;
    }
  }

  return {
    getFigures,
  };
}

module.exports = getDonationFiguresService;
