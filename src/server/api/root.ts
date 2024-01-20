import { roomRouter } from "~/server/api/routers/rooms";
import { createTRPCRouter } from "~/server/api/trpc";
import { bookingRouter } from "./routers/bookings";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  room: roomRouter,
  bookings: bookingRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
