import { useAtom } from "jotai";
import { useState, useRef, useEffect } from "react";
import Cursor from "~/components/cursor";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import RoomCard from "~/components/room-card";
import RoomToast from "~/components/toast";
import { fromAtom, tillAtom } from "~/store/store";
import { api } from "~/utils/api";
interface Params {
  from: Date;
  till: Date;
}

const Page = () => {
  const [params, setParams] = useState<Params>();
  const fromRef = useRef<HTMLInputElement>(null);
  const tillRef = useRef<HTMLInputElement>(null);
  const [alert, setAlert] = useState(false);
  const [run, setRun] = useState(false);
  const [, setFromAtom] = useAtom(fromAtom);
  const [, setTillAtom] = useAtom(tillAtom);
  const { data: rooms } = api.room.getRooms.useQuery(params!, {
    enabled: run,
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    setRun(false);
  }, [rooms]);

  function SubmitHandler() {
    try {
      const from = fromRef.current!.valueAsDate!;
      const till = tillRef.current!.valueAsDate!;
      if (till.getTime() > from.getTime()) {
        setAlert(false);
        setParams({ from, till });
        setRun(true);
        setFromAtom(from);
        setTillAtom(till);
      } else {
        setAlert(true);
      }
    } catch (err) {
      setAlert(true);
    }
  }

  return (
    <>
      <Navbar />
      <Cursor />
      <main className="p-4 pt-24">
        <section className="flex min-h-screen flex-col items-center gap-8">
          <h2 className="text-center">Rooms We Offer</h2>
          <div className="flex w-full flex-col items-center justify-center gap-8 rounded-2xl bg-white/5 p-4 lg:w-2/3 lg:flex-row lg:items-baseline">
            {/* FROM */}
            <div className="flex flex-row items-baseline gap-4">
              <label>From: </label>
              <input
                type="date"
                required
                ref={fromRef}
                className="input input-bordered input-primary w-full max-w-lg"
              />
            </div>
            {/* TILL */}
            <div className="flex flex-row items-baseline gap-4">
              <label>Till: </label>
              <input
                type="date"
                ref={tillRef}
                required
                className="input input-bordered input-primary w-full max-w-lg"
              />
            </div>
            {/* SUBMIT  */}
            <div className="flex flex-row items-baseline gap-4">
              <input
                type="submit"
                value={"Search"}
                onClick={SubmitHandler}
                className="btn btn-primary"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rooms?.map((room, i) => <RoomCard {...room} />)}
          </div>
          <br />
        </section>

        {alert ? (
          <RoomToast
            msg={"The From date should be less than Till and must be filled!"}
          />
        ) : null}
      </main>
      <Footer />
    </>
  );
};

export default Page;
