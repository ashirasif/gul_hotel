import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import Cursor from "~/components/cursor";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import {
  emailAtom,
  fromAtom,
  nameAtom,
  phoneAtom,
  priceAtom,
  roomAtom,
  tillAtom,
} from "~/store/store";
import { api } from "~/utils/api";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameAtomDisplay, setNameAtom] = useAtom(nameAtom);
  const [emailAtomDisplay, setEmailAtom] = useAtom(emailAtom);
  const [phoneAtomDisplay, setPhoneAtom] = useAtom(phoneAtom);
  const [from] = useAtom(fromAtom);
  const [till] = useAtom(tillAtom);
  const [room] = useAtom(roomAtom);
  const [price] = useAtom(priceAtom);
  const mutation = api.bookings.createBooking.useMutation();
  const router = useRouter();
  const days = useMemo(() => till.getDate() - from.getDate(), [from, till]);
  useEffect(() => {
    room === 0 ? router.push("/") : null;
  }, []);
  useEffect(() => {
    mutation.isSuccess && router.push("/thanks");
  }, [mutation.isSuccess]);
  function handleSubmit(e: any) {
    e.preventDefault();
    if (name && email && phone) {
      setNameAtom(name);
      setEmailAtom(email);
      setPhoneAtom(phone);

      const res = mutation.mutate({
        name,
        email,
        price,
        phone,
        room,
        till,
        from,
      });
    }
  }
  return (
    <>
      <Cursor />
      <Navbar />
      <form className="w-full">
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
          <div className="flex flex-col justify-start gap-4 lg:w-2/3">
            <h2 className="text-center">Enter Your Info</h2>

            <div className="ma-border flex flex-col lg:flex-row gap-4 bg-white/5 p-4">
              <div className="flex basis-1/2 flex-col items-center justify-center">
                <h2>Room {room}</h2>
                <p className="text-white/70 text-lg">
                  For <span className="text-white">{days} Night(s)</span>
                </p>
                <h2 className="my-4">
                  Your Total: <strong>{price}</strong>
                </h2>
              </div>

              <div className="basis-1/2">
                <div className="flex flex-col gap-4">
                  <label className="form-control w-full basis-1/2">
                    <div className="label">
                      <span className="label-text text-lg">Name:</span>
                    </div>
                    <input
                      onChange={(e) => setName(e.currentTarget.value)}
                      required
                      type="text"
                      placeholder="Eg: Muhammad Ashir"
                      className="input input-bordered w-full"
                    />
                  </label>
                  <label className="form-control w-full basis-1/2">
                    <div className="label">
                      <span className="label-text text-lg">Email:</span>
                    </div>
                    <input
                      required
                      type="email"
                      onChange={(e) => setEmail(e.currentTarget.value)}
                      placeholder="something@gmail.com"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-lg">Phone:</span>
                  </div>
                  <input
                    required
                    onChange={(e) => {
                      setPhone(e.currentTarget.value);
                    }}
                    type="text"
                    placeholder="+92 ___ ________"
                    className="input input-bordered w-full"
                  />
                </label>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary my-4 w-full"
                >
                  BOOK
                </button>
              </div>
            </div>
          </div>
        </main>
      </form>
      <Footer />
    </>
  );
};

export default Page;
