// secret variables
import dotenv from 'dotenv';

dotenv.config({});

const config = {
  MONGO_DB_URL: process.env.MONGO_DB_URL
};

export default config;
