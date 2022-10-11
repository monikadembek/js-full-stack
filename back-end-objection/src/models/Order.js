import { Model } from 'objection';
import { Delivery } from './Delivery.js';
import { User } from './User.js';
import { Restaurant } from './Restaurant.js';
import { Product } from './Product.js';

export class Order extends Model {
  static tableName = 'orders'; // representation of fields from orders table

  // virtual fields, they don't exist in data models, in the instances
  // only accessible in json
  static virtualAttributes = ['fullPrice'];

  fullPrice() {
    // if sb made query for products, and asked for graphFetched products
    // we want to count the value of products
    if (Array.isArray(this.products)) {
      return this.products.reduce((price, product) => price + product.price, 0);
    }
    return null;
  }

  // we need to define the relations, that one model depends on another model
  // we do this once in the model, we don't need to do this in queries
  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: User, // class we want to connect to
      join: {
        from: 'orders.userId', // fk in orders table
        to: 'users.id' // pk in users table
      }
    },
    delivery: {
      relation: Model.HasOneRelation,
      modelClass: Delivery,
      join: {
        from: 'orders.id', 
        to: 'deliveries.orderId' 
      }
    },
    restaurant: {
      relation: Model.BelongsToOneRelation,
      modelClass: Restaurant,
      join: {
        from: 'orders.restaurantId', 
        to: 'restaurants.id'
      }
    },
    products: {
      relation: Model.ManyToManyRelation,
      modelClass: Product,
      join: {
        from: 'orders.id',
        through: {
          from: 'orders_products.orderId',
          to: 'orders_products.productId',
          extra: ['price'] // take price field from this table, not from Products table
        },
        to: 'products.id'
      }
    }
  }
}