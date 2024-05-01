import * as z from "zod"

export const ExpenseSchema = z.object({
  id: z.number().int().positive(),
  title: z.string(),
  amount: z.number(),
})

export const CreateExpenseSchema = ExpenseSchema.omit({ id: true })