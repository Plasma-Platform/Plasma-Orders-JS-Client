import Order from '../../src/Order';
import {assert, expect} from 'chai';
import nock from 'nock';

describe('Orders API Unit tests', function () {
  before(function () {
    this.serviceURL = 'http://service-orders.dev/api/v2';
    this.api = new Order(this.serviceURL, 'en');
    this.token = 'tokentokentokentokentokentoken';
    this.items = [{id: 0, name: 'name-0'}, {id: 1, name: 'name-1'}];
    this.nock = function (req, data) {
      console.log('reg', this.serviceURL + req);
      nock(this.serviceURL).get(req).reply(200, data);
    }
  });

  it('Get list of users orders', function (done) {
    this.nock('/orders?page=2&locale=en', this.items);
    this.api.getListOfUsersOrders(this.token, {page: 2}).then(response => {
      assert.deepEqual(response, this.items);
      done();
    }).catch(done);
  });

  it('Get order by id', function (done) {
    this.nock('/orders?locale=en&id=2', this.items);
    this.api.getOrderById(this.token, 2).then(response => {
      assert.deepEqual(response, this.items);
      done();
    }).catch(done);
  });

  it('Restore download link request', function (done) {
    this.nock('/orders/2/55555/download-link?locale=en', this.items);
    this.api.restoreDownloadLink(this.token, 2, 55555).then(response => {
      assert.deepEqual(response, this.items);
      done();
    }).catch(done);
  });
});
