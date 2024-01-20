import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Cursor from "~/components/cursor";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import { api } from "~/utils/api";
import {
  fromAtom,
  emailAtom,
  nameAtom,
  phoneAtom,
  priceAtom,
  roomAtom,
  tillAtom,
} from "~/store/store";
import { useAtom } from "jotai";

const Page = () => {
  const router = useRouter();
  const mutation = api.bookings.createBooking.useMutation();
  const [email] = useAtom(emailAtom);
  const [name] = useAtom(nameAtom);
  const [phone] = useAtom(phoneAtom);
  const [till] = useAtom(tillAtom);
  const [from] = useAtom(fromAtom);
  const [room] = useAtom(roomAtom);
  const [price] = useAtom(priceAtom);

  // useEffect(() => {
  //   mutation.mutate({
  //     name,
  //     email,
  //     price,
  //     phone,
  //     room,
  //     till,
  //     from,
  //   });
  // }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-4 gap-4">
        <div className="max-w-lg text-center">
          <h1>Way to go!!!</h1>
          <p>
            You will recieve a phone call shortly for confirmation of you
            booking.
          </p>
        </div>

        <button
          className="btn btn-primary btn-outline"
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
        >
          Back To Home
        </button>
      </main>
      <Footer />
    </>
  );
};

export default Page;
