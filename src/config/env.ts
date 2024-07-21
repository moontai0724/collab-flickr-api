export const database = {
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "3306", 10),
  user: process.env.DB_USER || "react-together",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "react-together",
};
