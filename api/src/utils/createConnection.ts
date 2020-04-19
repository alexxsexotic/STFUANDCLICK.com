import { getConnectionOptions, createConnection } from "typeorm";

export default async () => {
  const options = await getConnectionOptions();
  return createConnection({ ...options });
};
