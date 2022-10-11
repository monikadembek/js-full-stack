import { Model } from 'objection';

export class User extends Model {
  static tableName = 'users'; // representation of fields from users table

  // remove password field from the json that will be returned from users table
  $formatJson(json) {
    const computed = super.$formatJson(json);
    delete computed.password;
    return computed;
  }
}