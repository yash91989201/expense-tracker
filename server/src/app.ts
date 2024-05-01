import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
// ROUTES
import { expensesRoute } from 'server/src/routes/expenses'

const app = new Hono()

app.get('/api', (c) => c.text('Server working!'))

// attathing routes 
app.route("/api/expenses", expensesRoute)

// serve frontend files
app.get("*", serveStatic({ root: "./client/dist" }))
app.get("*", serveStatic({ root: "./client/dist/index.html" }))

export default app