import { knex } from '../src/database/connection.js';

// queries db for restaurants
const restaurants = await knex('restaurants');

await knex.destroy(); // closes connection  with db 

console.log(restaurants);