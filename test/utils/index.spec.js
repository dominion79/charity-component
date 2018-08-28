const { calculatePercentage } = require('../../server/utils/index');

describe('Utils', () => {
  context('When taregt and raised figures are avilable', () => {
    it('Returns the completes percentage', async () => {
      const percentage = calculatePercentage(20, 100);

      expect(percentage).to.eql(20);
    });
  });
});
