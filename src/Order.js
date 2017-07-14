import fetch from 'isomorphic-fetch';
import serialize from 'plasma-serialize';
import Promise from 'bluebird';
/**
 * Orders API JS client.
 *
 * In order to use Orders API you should create an instance of this class.
 * ~~~~
 * import Orders from "tm-orders-api-client-js";
 * const products = new Orders ('http://service-orders.dev/api/v2', 'en');
 * ~~~~
 * @constructor Orders
 */
export default class Order {
  locale = null;
  url = null;

  constructor (url, locale = 'en') {
    this.locale = locale;
    this.url = url;
  }

  /**
   * Get list of users orders
   * @param token {String} User token
   * @param params {Object} list of orders parameters
   * <pre>
   *   {
   *    page: Number,
   *    per-page: Number,
   *    product-type: String,
   *    product-ids: String,
   *    ids: String
   *   }
   * </pre>
   * @returns {Array} <pre>[
   *   {
   * "affiliate_id": "TM",
   * "order_id": "NDrMh3S3XvSt0LfbHoWh",
   * "user_id": "124088",
   * "date": 1481166873,
   * "status": 1,
   * "amount": "138",
   * "locale": "EN",
   * "project_id": "0",
   * "merchantTransactionId": "",
   * "merchantSystem": "PayPal",
   * "products": [
   *   {
   *     "id": "52995",
   *     "class": "template",
   *     "price": "89",
   *     "license": "single site",
   *     "products": []
   *   },
   *   {
   *     "id": "53001",
   *     "class": "template",
   *     "price": "75",
   *     "license": "single site",
   *     "products": []
   *   },
   *   {
   *     "id": "55932",
   *     "class": "template",
   *     "price": "11",
   *     "license": "single site",
   *     "products": [],
   *     "name": "PRO Industry PSD Template",
   *     "url": "/psd-templates/pro-industry-psd-template-55932.html",
   *     "type": "PSD Template",
   *     "image": "55932-original.jpg"
   *   }
   *  ]
   * }, ...]</pre>
   * @method Orders#getListOfUsersOrders
   */
  async getListOfUsersOrders (token, params = {}) {
    params = {...params, ...{locale : this.locale}};
    if (!token.length) {
      throw new Error('Token can`t defined');
    }
    const response = await this._fetchRequest(`${this.url}/orders?${serialize(params)}`, token);
    return response.json();
  }

  /**
   * Get Order By ID
   * @param token {String} User token
   * @param ID {Number} Order ID
   * @returns {Object} <pre>
   *   {
   * "affiliate_id": "TM",
   * "order_id": "NDrMh3S3XvSt0LfbHoWh",
   * "user_id": "124088",
   * "date": 1481166873,
   * "status": 1,
   * "amount": "138",
   * "locale": "EN",
   * "project_id": "0",
   * "merchantTransactionId": "",
   * "merchantSystem": "PayPal",
   * "products": [
   *   {
   *     "id": "52995",
   *     "class": "template",
   *     "price": "89",
   *     "license": "single site",
   *     "products": []
   *   },
   *   {
   *     "id": "53001",
   *     "class": "template",
   *     "price": "75",
   *     "license": "single site",
   *     "products": []
   *   },
   *   {
   *     "id": "55932",
   *     "class": "template",
   *     "price": "11",
   *     "license": "single site",
   *     "products": [],
   *     "name": "PRO Industry PSD Template",
   *     "url": "/psd-templates/pro-industry-psd-template-55932.html",
   *     "type": "PSD Template",
   *     "image": "55932-original.jpg"
   *   }
   *  ]
   * }</pre>
   * @method Orders#getOrderById
   */
  async getOrderById (token, id) {
    if (!token.length) {
      throw new Error('Token can`t defined');
    }
    if (!this._isValidId(id)) {
      throw new Error('ID is not valid');
    }
    const response = await this._fetchRequest(`${this.url}/orders?locale=${this.locale}&id=${id}`, token);
    return response.json();
  }

  /**
   * Restore Download Link
   * @param token {String} User token
   * @param orderID {Number} Order ID
   * @param productID {Number} Product ID
   * @returns {Object} <pre>
   * {
   *  "orderId": "xdtGS1apwbLKmv9ZXOlV",
   *  "productId": 123,
   *  "link": "http://dddd.ccc/dgdfgdfg",
   *  "downloadStatus": "inZipper",
   *  "isExpired": false,
   *  "rate": 1,
   *  "zipperTime": 1
   * }
   * </pre>
   * @method Orders#restoreDownloadLink
   */
  async restoreDownloadLink (token, orderId, productId) {
    if (!token.length) {
      throw new Error('Token can`t defined');
    }
    if (!this._isValidId(orderId)) {
      throw new Error('ID is not valid');
    }
    if (!this._isValidId(productId)) {
      throw new Error('ID is not valid');
    }
    const response = await this._fetchRequest(`${this.url}/orders/${orderId}/${productId}/download-link?locale=${this.locale}`, token, 'POST');
    return response.json();
  }

  /**
   * Return Correct id or not
   * @param id {Number} Product id
   * @returns {Bool}
   * @method Orders#_isValidId
   */
  _isValidId (val) {
    return !!val;
  }

  /**
   * Return Fetch Promise
   * @param url {String} Where request go
   * @param token {String} auth user token
   * @returns {Promise}
   * @method Orders#_fetchRequest
   */
  async _fetchRequest (url, token = false, method = 'GET', params={}) {
    const headers = {};
    if(token){
      headers['Authorization'] = token;
    }
    if(method === 'POST' || method === 'PUT' || method === 'PATCH') {
      headers['content-type'] = 'application/x-www-form-urlencoded';
    }
    let requestData = {
      method  : method,
      headers : new Headers(headers)
    };
    if (Object.keys(params).length) {
      requestData['body'] = serialize(params);
    }
    let response  = await fetch(url, requestData);
    if (response.status >= 400) {
      throw new Error('Bad server response');
    }
    return response;
  }
}
