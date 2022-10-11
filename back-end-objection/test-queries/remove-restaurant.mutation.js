import { knex } from '../src/database/connection.js';
import { Restaurant } from '../src/models/Restaurant.js';

try {
  // we always use query() - even to modify/delete data in table
  // query() - static method, operates on object in memory
  const restaurant = await Restaurant.query().findById(1)
    .throwIfNotFound({ message: "Restaurant doesn't exist" });
  // $query() - instance method, operates on instance of db
  await restaurant.$query().del();
  console.log(restaurant);
} catch (e) {
  console.error('There is error: ');
  console.log(e);
}

await knex.destroy(); // closes connection  with db 
