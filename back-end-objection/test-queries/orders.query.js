import { knex } from '../src/database/connection.js';
import { Order } from '../src/models/Order.js';

// queries db for orders
// will return table of Order objects
// add query for user

const orders = await Order.query().withGraphFetched('user');

// const orders = await Order.query()
//   .withGraphFetched('user(withEmailOnly)')
//   .modifiers({
//     withEmailOnly: (builder) => {
//       builder.select('email');
//     }
// });

await knex.destroy(); // closes connection  with db 

console.log(orders);
console.log(JSON.stringify(orders));