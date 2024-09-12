import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(cors())
  .get("/vegeta", async () => {
    console.log("Elysia vegeta");
    const data = await fetch("https://dragonball-api.com/api/characters/2")
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
    return data;
  })
  .listen(4000);

export type App = typeof app;
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
