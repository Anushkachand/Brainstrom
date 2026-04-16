const connectionString = process.env.DATABASE_URL || process.env.DB_URL;

const sequelize = connectionString && connectionString !== ''
  ? new Sequelize(connectionString, {
      dialect: 'postgres',
      protocol: 'postgres',
      dialectOptions: {
        ssl: process.env.DB_SSL === 'true'
          ? { rejectUnauthorized: false }
          : false,
      },
    })
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASS,
      {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
        dialect: 'postgres',
        dialectOptions: { ssl: false },
      }
    );

