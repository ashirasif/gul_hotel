import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const bookingRouter = createTRPCRouter({
  getBookings: publicProcedure
    .input(z.object({ from: z.date(), till: z.date() }))
    .query(({ ctx, input }) => {
      return ctx.db.bookings.findMany({
        where: {
          from: {
            gte: input.from,
            lte: input.till,
          },
        },
      });
    }),

  createBooking: publicProcedure
    .input(
      z.object({
        name: z.string(),
        phone: z.string(),
        email: z.string(),
        room: z.number(),
        till: z.date(),
        from: z.date(),
        price: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const booking = await ctx.db.bookings.create({ data: input });
      console.log("booking", booking);
    }),

  getAllBookings: publicProcedure.query(({ ctx }) => {
    return ctx.db.bookings.findMany();
  }),

  getBookingsById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db.bookings.findUnique({
        where: {
          id: input.id,
        },
      });
    }),

  updateBooking: publicProcedure
    .input(
      z.object({
        id: z.number(),
        name: z.string(),
        phone: z.string(),
        email: z.string(),
        room: z.number(),
        till: z.date(),
        from: z.date(),
        status: z.string(),
        price: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const booking = await ctx.db.bookings.update({
        where: { id: input.id },
        data: {
          name: input.name,
          phone: input.phone,
          status: input.status,
          email: input.email,
          room: input.room,
          till: input.till,
          from: input.from,
          price: input.price,
        },
      });
      return booking;
    }),
});
