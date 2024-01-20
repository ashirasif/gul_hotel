import type { Bookings } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { api } from "~/utils/api";

export default function Page() {
  const { data: bookings } = api.bookings.getAllBookings.useQuery();
  const router = useRouter();
  const [search, setSearch] = useState("");
  function colorByStatus(status: string) {
    switch (status) {
      case "pending":
        return "text-yellow-500";
      case "staying":
        return "text-green-500";
      case "left":
        return "text-red-500";
      default:
        return "text-white";
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <section>
        <h2>Bookings</h2>
      </section>
      <section>
        {/* search */}
        <div>
          <label className="form-control w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered input-primary w-full pr-16"
                onChange={(e) => setSearch(e.currentTarget.value)}
              />
              <button className="btn btn-primary absolute right-0 top-0 rounded-l-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx="10" cy="10" r="7" />
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
              </button>
            </div>
          </label>
        </div>
      </section>
      <section>
        <div className="overflow-x-auto">
          <table className="ma-table table">
            {/* head */}
            <thead className="text-white">
              <tr className="border border-white">
                <th>ID</th>
                <th>Name</th>
                <th>Room</th>
                <th>Status</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {bookings
                ?.filter((booking) => {
                  if (search === "") {
                    return booking;
                  } else if (
                    booking.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return booking;
                  }
                })
                .map((booking: Bookings) => (
                  <tr
                    key={booking.id}
                    className="transition-colors duration-300 hover:cursor-pointer hover:bg-primary/30"
                    onClick={() => router.push(`/admin/booking/${booking.id}/`)}
                  >
                    <td>{booking.id}</td>
                    <td>{booking.name}</td>
                    <td>{booking.room}</td>
                    <td
                      className={colorByStatus(booking.status).concat(
                        " ",
                        "font-bold italic",
                      )}
                    >
                      {booking.status}
                    </td>
                    <td>{booking.phone}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
