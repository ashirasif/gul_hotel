import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Page() {
  const { status } = useSession();
  if (status === "loading") return <div>Loading...</div>;
  if (status === "unauthenticated") signIn("/admin");
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 gap-4">
      <section>
        <h1 className="text-center">Welcome, Admin</h1>
      </section>
      <section>
        <div className="flex flex-col gap-2">
          <Link href={"/admin/booking/"} className="btn btn-primary">
            Bookings
          </Link>
          <Link href={"/admin/rooms/"} className="btn btn-primary">
            Rooms
          </Link>
          <Link href={"/admin/expenses/"} className="btn btn-primary">
            Expenses
          </Link>
        </div>
      </section>
    </main>
  );
}
