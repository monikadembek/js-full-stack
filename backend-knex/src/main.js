import { knex } from './database/connection.js';

// queries db for restaurants
const restaurants = await knex('restaurants').where({ id: 1 }).first();

await knex.destroy(); // closes connection  with db 

console.log(restaurants);