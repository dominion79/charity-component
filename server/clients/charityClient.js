const request = require('superagent');

class charityClient {
  constructor(client = request) {
    this.client = client;
  }
  get(endpoint) {
    return this.client
      .get(endpoint)
      .then(res => res.body)
      .catch(() => null);
  }
}
module.exports = charityClient;
