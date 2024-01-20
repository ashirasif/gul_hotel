import Link from "next/link";
import React from "react";
import { api } from "~/utils/api";

const Room = ({ name }: { name: number }) => {
  const { data } = api.room.getRoom.useQuery({ name: name });
  if (data) {
    return (
      <article className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-slate-400 p-4 text-center font-light transition-colors duration-300 hover:cursor-pointer hover:bg-teal-950 lg:w-[20vw]">
        <h2 className="bottom-1 w-full border-b-2 pb-2 text-center">
          Room {data.name}
        </h2>
        <div className="room-detail-container flex h-full w-full flex-col gap-4">
          <p className="room-details">{data.floor} Floor</p>
          <p className="room-details">
            {!!data.singleBed
              ? `${data.singleBed} Single Beds`
              : `${data.doubleBed} Double Bed`}
          </p>

          <p className="room-details">{Number(data.lcd)} LCD</p>
          {/* <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512" className="relative top-1"><path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg> */}

          {data.fridge && <p className="room-details">Fridge</p>}
          {data.extraMattress && <p className="room-details">Extra Mattress</p>}
          <p className="room-details">complimentary Breakfast</p>
        </div>

        <h2 className="w-full border-t-2 border-white pt-2 text-center">
          PKR {data.price}
        </h2>
      </article>
    );
  }
};

const Page3 = () => {
  return (
    <section className="flex min-h-screen flex-col justify-center bg-gradient-to-b from-slate-950 to-black px-12">
      <h2 id="pricing" className="mb-4 text-center">
        What We Offer!
      </h2>
      <div className="grid auto-cols-fr grid-flow-row place-content-center gap-4 lg:auto-cols-min lg:grid-flow-col">
        <Room name={206} />
        <Room name={201} />
        <Room name={101} />
      </div>
      <div className="mt-4 flex flex-row justify-center">
        <Link href="/rooms" className="btn btn-primary btn-lg">
          Browse All
        </Link>
      </div>
    </section>
  );
};

export default Page3;
