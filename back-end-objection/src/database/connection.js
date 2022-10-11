import Knex from 'knex';
import knexfile from '../../knexfile.js';
import { Model, knexSnakeCaseMappers } from 'objection';

const env = process.env.NODE_ENV || 'development';

// we pass appropriate configuration to Knex to connect with db using for example
// development configuration 
export const knex = Knex({
    ...knexfile[env],
    ...knexSnakeCaseMappers() // changes _ to camelCase
});

// we need to connect objection model to knex connection with db
Model.knex(knex);