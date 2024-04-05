import { json } from "body-parser";
import express, { Request, Response, NextFunction } from "express";
import todoRoutes from "./router/todos";

const app = express();

app.use(json());
app.use("/todos", todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
