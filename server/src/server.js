const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const { createConnection } = require("typeorm");
const schema = require("./Schema");

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "colivia",
    username: "root",
    password: "Malaysia2023",
    logging: true,
    synchronize: false,
    entities: [],
  });

  const app = express();

  const corsOptions = {
    origin: "http://localhost:8081",
  };

  app.use(cors(corsOptions));
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
  app.use(express.urlencoded({ extended: true }));
  app.get("/", (req, res) => {
    res.json({ message: "Welcome Alan, whats up?" });
  });

  const PORT = process.env.PORT || 8080;

  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
};

main().catch((err) => {
  console.log(err);
});
