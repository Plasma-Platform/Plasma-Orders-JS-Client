import Order from '../../src/Order';
import {assert} from 'chai';

describe('Order API Functional tests', function () {
  before(function () {
    this.serviceURL = 'http://service-orders.dev/api/v2';
    this.api = new Order(this.serviceURL, 'en');
  });

  it('Create SDK Object without locale', function() {
    const testApi = new Order(this.serviceURL);
    assert.deepEqual(testApi.locale, 'en');
  });

  it('_isValidId', function () {
    assert.isTrue(this.api._isValidId(1));
    assert.isFalse(this.api._isValidId());
    assert.isFalse(this.api._isValidId(undefined));
  });
});