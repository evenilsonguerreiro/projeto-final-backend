import { neon } from '@neondatabase/serverless';


const connectionString = 'postgresql://neondb_owner:npg_RO2UEZrBygL6@ep-cold-math-achaqcsw-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require';

const sql = neon(connectionString);

export default sql;