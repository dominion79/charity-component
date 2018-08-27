const getDonationFiguresService = require('../../server/services/donationFiguresService');

describe('Charity donation figure', () => {
  context('When charity donation figures are aviable', () => {
    it('Returns the current charity donation figures', async () => {
      const service = getDonationFiguresService(generateDonationFiguresMock());
      const figures = await service.getFigures();

      expect(figures).to.eql(donationFigures());
    });
  });
});

function generateDonationFiguresMock() {
  const httpClient = {
    get: sinon.stub().returns({
      status: 'OK',
      target: 5500,
      raised: 4573.02,
    }),
  };
  return httpClient;
}

function donationFigures() {
  return {
    status: 'OK',
    target: 5500,
    raised: 4573.02,
  };
}
