import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const roomRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.rooms.findMany();
  }),

  getRoom: publicProcedure
    .input(z.object({ name: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db.rooms.findUnique({
        where: {
          name: input.name,
        },
      });
    }),
});
