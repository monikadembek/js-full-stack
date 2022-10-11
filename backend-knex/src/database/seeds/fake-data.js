import bcrypt from 'bcryptjs';

const genPassword = () => bcrypt.hash('test1234', 10);

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  // we juz need to delete restaurants and users and rest will also be deleted
  // bc of the foreign keys
  // await knex('deliveries').del();
  // await knex('orders_products').del();
  // await knex('orders').del();
  // await knex('products').del();
  await knex('restaurants').del();
  await knex('users').del();

  await knex('users').insert([
    { id: 1, email: 'admin@fooddelivery.com', password: await genPassword() },
    { id: 2, email: 'user@fooddelivery.com', password: await genPassword() }
  ]);

  await knex('restaurants').insert([
    { id: 1, name: 'Kabuki', address: 'sushi street 23, 90123 Hutomaki', type: 'SUSHI' },
    { id: 2, name: 'So fast', address: '4 Sixth Ave, Applecross WA 6153, Australia', type: 'FAST FOOD' }
  ]);

  await knex('products').insert([
    { id: 1, name: "Maki", description: "24 rolls", price: 89.2, restaurant_id: 1 },
    { id: 2, name: "Philadelphia Roll", description: "12 rolls", price: 120.0, restaurant_id: 1 },
    { id: 3, name: "Volcano Roll", description: "3 rolls", price: 22.50, restaurant_id: 1 },
    { id: 4, name: "Big burger", price: 30.0, restaurant_id: 2 },
    { id: 5, name: "Fish burger", description: "with codfish", price: 40.0, restaurant_id: 2 }
  ]);

  await knex('orders').insert([
    { id: 1, date: new Date(), user_id: 1, restaurant_id: 1 },
    { id: 2, date: new Date(), user_id: 2, restaurant_id: 2 }
  ]);

  await knex('orders_products').insert([
    { id: 1, order_id: 1, product_id: 1, price: 79.2 },
    { id: 2, order_id: 1, product_id: 3, price: 12.5 },
    { id: 3, order_id: 2, product_id: 5, price: 30 }
  ]);

  await knex('deliveries').insert([
    { id: 1, delivery_date: new Date(), order_id: 2 },
    { id: 2, order_id: 1 }
  ]);
};
