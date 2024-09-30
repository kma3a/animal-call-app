import { Animals } from "./animal.schema";
import { Locations } from "./location.schema";
import { DataSource } from 'typeorm';

const connection = new DataSource({
  type: 'sqlite',
  synchronize: false, // false so we do not recreate the tables
  logging: true,
  logger: 'simple-console',
  database: './animal.sql',
  entities: [Animals, Locations],
});

connection.initialize()
  .then(async () => {
    console.log("Connection initialized with database...");
  })
  .catch((error) => console.log(error));

export const getDataSource = (delay = 3000): Promise<DataSource> => {
  if (connection.isInitialized) return Promise.resolve(connection);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (connection.isInitialized) resolve(connection);
      else reject("Failed to create connection with database");
    }, delay);
  });
};