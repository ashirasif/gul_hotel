import { useState, useRef, ReactEventHandler } from "react";
import Cursor from "~/components/cursor";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";

const Page = () => {
  const [from , setFrom] = useState<Date>();
  const [till , setTill] = useState<Date>();
  const fromRef = useRef<HTMLInputElement>(null)
  const tillRef = useRef<HTMLInputElement>(null)

  function SubmitHandler() {
    
    setFrom(fromRef.current!.valueAsDate!)
    setTill(tillRef.current!.valueAsDate!)
      
    
    console.log(from, till)
  }


  return (
    <>
      <Navbar />
      <Cursor />
      <main className="p-4">
        <section className="flex min-h-screen flex-col items-center gap-8">
          <h2 className="text-center">Rooms We Offer</h2>
          <div className="flex w-2/3 flex-row justify-center bg-white/5 rounded-2xl p-4 items-baseline gap-8">
            {/* FROM */}
            <div className="flex flex-row items-baseline gap-4">
              <label>From: </label>
              <input type="date" required ref={fromRef} className="input input-primary input-bordered w-full max-w-lg" />
            </div>
            {/* TILL */}
            <div className="flex flex-row items-baseline gap-4">
              <label>Till: </label>
              <input type="date" ref={tillRef} required className="input w-full input-bordered input-primary max-w-lg" />
            </div>
            {/* SUBMIT  */}
            <div className="flex flex-row items-baseline gap-4">
              <input type="submit" value={"Search"} onClick={SubmitHandler} className="btn btn-primary" />
            </div>
          </div>
          <div className="grid grid-cols-3"></div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
