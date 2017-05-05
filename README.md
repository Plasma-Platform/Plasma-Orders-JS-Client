<a name="Orders"></a>

## Orders
**Kind**: global class  

* [Orders](#Orders)
    * [new Orders()](#new_Orders_new)
    * [.getListOfUsersOrders(token, params)](#Orders+getListOfUsersOrders) ⇒ <code>Array</code>
    * [.getOrderById(token, ID)](#Orders+getOrderById) ⇒ <code>Object</code>
    * [.restoreDownloadLink(token, orderID, productID)](#Orders+restoreDownloadLink) ⇒ <code>Object</code>
    * [._isValidId(id)](#Orders+_isValidId) ⇒ <code>Bool</code>
    * [._fetchRequest(url, token)](#Orders+_fetchRequest) ⇒ <code>Promise</code>

<a name="new_Orders_new"></a>

### new Orders()
Orders API JS client.

In order to use Orders API you should create an instance of this class.
~~~~
import Orders from "tm-orders-api-client-js";
const products = new Orders ('http://service-orders.dev/api/v2', 'en');
~~~~

<a name="Orders+getListOfUsersOrders"></a>

### orders.getListOfUsersOrders(token, params) ⇒ <code>Array</code>
Get list of users orders

**Kind**: instance method of [<code>Orders</code>](#Orders)  
**Returns**: <code>Array</code> - <pre>[
  {
"affiliate_id": "TM",
"order_id": "NDrMh3S3XvSt0LfbHoWh",
"user_id": "124088",
"date": 1481166873,
"status": 1,
"amount": "138",
"locale": "EN",
"project_id": "0",
"merchantTransactionId": "",
"merchantSystem": "PayPal",
"products": [
  {
    "id": "52995",
    "class": "template",
    "price": "89",
    "license": "single site",
    "products": []
  },
  {
    "id": "53001",
    "class": "template",
    "price": "75",
    "license": "single site",
    "products": []
  },
  {
    "id": "55932",
    "class": "template",
    "price": "11",
    "license": "single site",
    "products": [],
    "name": "PRO Industry PSD Template",
    "url": "/psd-templates/pro-industry-psd-template-55932.html",
    "type": "PSD Template",
    "image": "55932-original.jpg"
  }
 ]
}, ...]</pre>  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | User token |
| params | <code>Object</code> | list of orders parameters <pre>   {    page: Number,    per-page: Number,    product-type: String,    product-ids: String,    ids: String   } </pre> |

<a name="Orders+getOrderById"></a>

### orders.getOrderById(token, ID) ⇒ <code>Object</code>
Get Order By ID

**Kind**: instance method of [<code>Orders</code>](#Orders)  
**Returns**: <code>Object</code> - <pre>
  {
"affiliate_id": "TM",
"order_id": "NDrMh3S3XvSt0LfbHoWh",
"user_id": "124088",
"date": 1481166873,
"status": 1,
"amount": "138",
"locale": "EN",
"project_id": "0",
"merchantTransactionId": "",
"merchantSystem": "PayPal",
"products": [
  {
    "id": "52995",
    "class": "template",
    "price": "89",
    "license": "single site",
    "products": []
  },
  {
    "id": "53001",
    "class": "template",
    "price": "75",
    "license": "single site",
    "products": []
  },
  {
    "id": "55932",
    "class": "template",
    "price": "11",
    "license": "single site",
    "products": [],
    "name": "PRO Industry PSD Template",
    "url": "/psd-templates/pro-industry-psd-template-55932.html",
    "type": "PSD Template",
    "image": "55932-original.jpg"
  }
 ]
}</pre>  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | User token |
| ID | <code>Number</code> | Order ID |

<a name="Orders+restoreDownloadLink"></a>

### orders.restoreDownloadLink(token, orderID, productID) ⇒ <code>Object</code>
Restore Download Link

**Kind**: instance method of [<code>Orders</code>](#Orders)  
**Returns**: <code>Object</code> - <pre>
{
 "orderId": "xdtGS1apwbLKmv9ZXOlV",
 "productId": 123,
 "link": "http://dddd.ccc/dgdfgdfg",
 "downloadStatus": "inZipper",
 "isExpired": false,
 "rate": 1,
 "zipperTime": 1
}
</pre>  

| Param | Type | Description |
| --- | --- | --- |
| token | <code>String</code> | User token |
| orderID | <code>Number</code> | Order ID |
| productID | <code>Number</code> | Product ID |

<a name="Orders+_isValidId"></a>

### orders._isValidId(id) ⇒ <code>Bool</code>
Return Correct id or not

**Kind**: instance method of [<code>Orders</code>](#Orders)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>Number</code> | Product id |

<a name="Orders+_fetchRequest"></a>

### orders._fetchRequest(url, token) ⇒ <code>Promise</code>
Return Fetch Promise

**Kind**: instance method of [<code>Orders</code>](#Orders)  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | Where request go |
| token | <code>String</code> | auth user token |

