import Knex from 'knex';
import knexfile from '../../knexfile.js';
 
const env = process.env.NODE_ENV || 'development';

// we pass appropriate configuration to Knex to connect with db using for example
// development configuration 
export const knex = Knex(knexfile[env]);