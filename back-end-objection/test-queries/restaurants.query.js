import { knex } from '../src/database/connection.js';
import { Restaurant } from '../src/models/Restaurant.js';

// queries db for restaurants
const restaurants = await Restaurant.query();

await knex.destroy(); // closes connection  with db 

console.log(restaurants);