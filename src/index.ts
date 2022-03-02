import express from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";
import errorHandler from './middleware/error.handler.middleware'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(usersRoute);
app.use(statusRoute);

app.use(errorHandler)

app.listen(3000, () => {
  console.log("Aplicaçao rodando agora automatizado");
});
