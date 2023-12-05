import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "~/components/navbar";
import Cursor from "~/components/cursor";
import { useState } from "react";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { api } from "~/utils/api";
import Page3 from "~/components/page3";
import Footer from "~/components/footer";
import Link from "next/link";

const pageScroll = atom(0);

export default function Home() {
  const [Read, setRead] = useState(false);
  const page = useAtomValue(pageScroll);
  const setPage = useSetAtom(pageScroll);

  return (
    <>
      <Head>
        <title>Gul Hotel</title>
        <meta name="description" content="Gul Hotel Johar Town Lahore" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Cursor />
      <Navbar />
      <main className="bg-black">
      
        <section className="page overflow-hidden bg-gradient-to-b from-teal-950 to-black">
          <div className="flex flex-row">
            <div className="flex min-h-screen w-1/2 flex-col items-end justify-center bg-black/60 p-4">
              <h1 className="border-b text-right tracking-wider">Stay</h1>
              <p className="text-center font-lato text-lg font-light uppercase lg:text-2xl 2xl:text-3xl">
                without a <br /> <span className="font-black">dent</span> in
                your <br /> pocket
              </p>
            </div>
            <div className="flex min-h-screen flex-col justify-center gap-4 p-4">
              <button className="btn btn-primary lg:btn-lg">Book Now</button>
              <button className="btn btn-primary lg:btn-lg">Have A Tour</button>
            </div>
          </div>
          <div className="absolute bottom-4 flex w-full flex-row justify-center uppercase tracking-widest">
            <p className="animate-pulse">Scroll Down</p>
          </div>
        </section>
        {/* PAGE 1 END */}
        <div className="spacer"></div>
        {/* PAGE 2 */}
        <section className="bg-gradient-to-b from-black to-slate-950">
          <div className="aflex gap-12">
            <article className="basis-1/2 self-center">
              <h2 className="lg:text-center">How Things Go Here!</h2>
              <p className={"lg:pt-4 lg:text-center" + (Read ? "" : " max-md:line-clamp-5")}>
                No fancy bells and whistles, just quality rest and relaxation at
                a great price. In a world where travel often comes with a hefty
                price tag, our hotel stands as a refreshing oasis of simplicity
                and affordability. We believe that true relaxation doesn't need
                the distraction of fancy bells and whistles. Instead, our focus
                is on providing a serene escape where quality rest takes center
                stage. Nestled in the heart of budget-friendly accommodations,
                our commitment lies in delivering a peaceful haven without
                compromising your wallet.
              </p>
              <div className="flex justify-center lg:hidden">
                <div
                  className="kbd kbd-xs mt-4 cursor-pointer p-1"
                  onClick={() => setRead(!Read)}
                >
                  Read {Read ? "Less" : "More"}
                </div>
              </div>
              <div className="mt-4 flex flex-row justify-center">
                <Link className="btn btn-primary" href={"/rooms"}>Starting From PKR 2500/-</Link>
              </div>
            </article>
            <div className="flex basis-1/2 flex-row justify-center">
              <Image
                width={1000}
                height={1000}
                src={"/key.jpeg"}
                className="img object-scale-down lg:aspect-square"
                alt="Room"
              />
            </div>
          </div>
          <div className="max-md:spacer"></div>
        </section>
        {/* PAGE 2 END */}
        {/* PAGE 3 START */}
        <Page3 />
        {/* PAGE 3 END */}
        {/* PAGE 4 START */}
        <section className="page bg-gradient-to-b from-black via-indigo-950/40 via-15% to-black"></section>
      </main>
      <Footer />
    </>
  );
}
