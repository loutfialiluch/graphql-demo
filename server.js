import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./graphql/schema.js";
import { accounts, contacts, opportunities } from "./data/index.js";

const PORT = process.env.PORT || 5000;

const server = express();

// GraphQL endpoint
server.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// REST endpoints
server.get("/", (req, res) => {
  const baseUrl = `${req.protocol}://${req.get("host")}`;
  res.json({
    event: "Webinaire Interne",
    subject: "Initiation à GraphQL",
    graphqlEndpoint: `${baseUrl}/graphql`,
    restEndpoints: [
      `${baseUrl}/api/accounts`,
      `${baseUrl}/api/contacts`,
      `${baseUrl}/api/opportunities`,
    ],
  });
});
server.get("/api/accounts", (req, res) => res.json(accounts));

server.get("/api/contacts", (req, res) => res.json(contacts));

server.get("/api/opportunities", (req, res) => res.json(opportunities));

server.listen(PORT, () =>
  console.log(`Server started running on PORT ${PORT}`)
);
