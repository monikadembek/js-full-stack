import { Model } from 'objection';

export class Product extends Model {
  static tableName = 'products'; // representation of fields from products table
}