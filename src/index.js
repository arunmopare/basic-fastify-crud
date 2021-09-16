const fastify = require("fastify")({
  logger: true,
});

//bring in routes
const routes = require("./Routes/index");

//db
const mongoose = require("mongoose");
mongoose
  .connect("YOUR DB URL")
  .then(console.log("Mongo is ready"))
  .catch((err) => console.log(err));

//routes
fastify.get("/", async (request, reply) => {
  return { visitor: "Arun" };
});

routes.forEach((route, index) => {
  fastify.route(route);
});

const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`Server is running at ${address}`);
  } catch (error) {}
};
start();
