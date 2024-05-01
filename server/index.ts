import app from "server/src/app";

Bun.serve({
  fetch: app.fetch
})