import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
import { bookingRouter } from "./bookings";

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

  getRooms: publicProcedure
    // .input(z.object({ filter: z.array(z.number()) }))
    .input(z.object({ from: z.date(), till: z.date() }))
    .query(async ({ ctx, input }) => {
      const caller = bookingRouter.createCaller(ctx);
      const data = await caller.getBookings({
        from: input.from,
        till: input.till,
      });
      const filter = data.map((e, _) => Number(e.room));
      return ctx.db.rooms.findMany({
        where: {
          name: {
            not: {
              in: filter,
            },
          },
        },
      });
    }),
  
  getRoomById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db.rooms.findUnique({
        where: {
          id: input.id,
        },
      });
    }),

  updateRoom: publicProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.number(),
        price: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const room = await ctx.db.rooms.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          price: input.price,
        },
      });
      return room;
    }),
});
