import { knex } from '../src/database/connection.js';

// queries db for orders
// leftJoin - connects queries to 2 databases into one response
const orders = await knex('orders').leftJoin('users', { 'orders.user_id': 'users.id' });

await knex.destroy(); // closes connection  with db 

console.log(orders);