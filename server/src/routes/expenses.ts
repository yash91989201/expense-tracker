import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
// SCHEMAS
import { CreateExpenseSchema } from "server/src/lib/schemas";
// CONSTANTS
import { fakeExpenses } from "server/src/constants";

const expensesRoute = new Hono()

expensesRoute
  .get("/", (c) => {
    return c.json({ expenses: fakeExpenses })
  })
  .get("/:id{[0-9]+}", (c) => {
    const id = Number.parseInt(c.req.param("id"))
    return c.json({ expenses: fakeExpenses })
  })
  .get("/total-spent", (c) => {
    return c.json({ amount: 600 })
  })
  .post("", zValidator("json", CreateExpenseSchema), async (c) => {
    const data = await c.req.valid("json")
    return c.json({ status: "SUCCESS" })
  })
  .put("/:id{[0-9]+}", (c) => {
    const id = Number.parseInt(c.req.param("id"))
    return c.json({ expenses: fakeExpenses })
  })
  .delete("/:id{[0-9]+}", (c) => {
    const id = Number.parseInt(c.req.param("id"))
    return c.json({ expenses: fakeExpenses })
  })

export { expensesRoute }