
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const expensesRouter = createTRPCRouter({

  getAll: publicProcedure
    .query(({ctx}) => {
      return ctx.db.expenses.findMany();
    }),
  
  create: publicProcedure
    .input(z.object({
      amount: z.number(),
      name: z.string(),
      date: z.date(),
    }))
    .mutation(async ({ctx, input}) => {
      const exp = await ctx.db.expenses.create({ data: input });
      return exp;
    }),

  delete: publicProcedure
    .input(z.object({
      id: z.number()
    }))
    .mutation(async ({ctx, input}) => {
      const exp = await ctx.db.expenses.delete({ where: { id: input.id } });
      return exp;
    }
  ),

})

