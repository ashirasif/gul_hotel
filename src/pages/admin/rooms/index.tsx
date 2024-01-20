import type { Bookings, Rooms } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { api } from "~/utils/api";

export default function Page() {
  const { data: rooms } = api.room.list.useQuery();
  const router = useRouter();
  const [search, setSearch] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <section>
        <h2>Rooms</h2>
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
                <th>Room #</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {rooms
                ?.filter((room) => {
                  if (search === "") {
                    return room;
                  } else if (
                    String(room.name).toLowerCase().includes(search.toLowerCase())
                  ) {
                    return rooms;
                  }
                })
                .map((room: Rooms) => (
                  <tr
                    key={room.name}
                    className="transition-colors duration-300 hover:cursor-pointer hover:bg-primary/30"
                    onClick={() => router.push(`/admin/rooms/${room.id}/`)}
                  >
                    <td>{room.id}</td>
                    <td>{room.name}</td>
                    <td>{room.price}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
