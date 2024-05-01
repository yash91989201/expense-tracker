import { ExpenseSchema } from "server/src/lib/schemas";
import type { z } from "zod";


export type ExpenseType = z.infer<typeof ExpenseSchema>