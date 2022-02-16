import {Pool} from 'pg'

const connectionString = 'postgres://tzfjrkuw:1CMIr_x8oLhHvbNjLajiXs04R-Q0fttJ@motty.db.elephantsql.com/tzfjrkuw';

const db = new Pool({connectionString});

export default db;