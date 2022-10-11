import { knex } from '../src/database/connection.js';
import { Order } from '../src/models/Order.js';

// withGraphFetched() - make multiple queries to fetch the result
const orders = await Order.query()
  .withGraphFetched('[user, restaurant, products, delivery]');

await knex.destroy(); // closes connection  with db 

console.log(orders);
console.log(JSON.stringify(orders, null, 4));