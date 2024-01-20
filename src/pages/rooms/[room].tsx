import { differenceInDays } from "date-fns";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React from "react";
import Cursor from "~/components/cursor";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import { fromAtom, priceAtom, roomAtom, tillAtom } from "~/store/store";
import { api } from "~/utils/api";

const Room = () => {
  const router = useRouter();
  const { data } = api.room.getRoom.useQuery({
    name: Number(router.query.room),
  });
  const [from] = useAtom(fromAtom);
  const [till] = useAtom(tillAtom);
  const [, setRoom] = useAtom(roomAtom);
  const [, setPrice] = useAtom(priceAtom);
  if (data) {
    return (
      <>
        <Navbar />
        <Cursor />
        <div className="spacer"></div>
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
          <div className="max-w-7xl">
            <button
              className="btn btn-primary self-start my-4"
              onClick={() => {
                router.back();
              }}
            >
              Go Back
            </button>
            <div className="aflex w-full gap-8 rounded-2xl border border-white bg-white/5 p-4 lg:justify-evenly">
              <div className="grid basis-1/2 bg-red-500 lg:h-full">
                <div className="carousel aspect-square w-full">
                  <div id="slide1" className="carousel-item relative w-full">
                    <img
                      src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                      className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide4" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide2" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                    <img
                      src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                      className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide1" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide3" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide3" className="carousel-item relative w-full">
                    <img
                      src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                      className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide2" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide4" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                  <div id="slide4" className="carousel-item relative w-full">
                    <img
                      src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                      className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                      <a href="#slide3" className="btn btn-circle">
                        ❮
                      </a>
                      <a href="#slide1" className="btn btn-circle">
                        ❯
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex basis-1/2 flex-col  items-center justify-center gap-4 lg:gap-8">
                <h1 className="tracking-tight">room {router.query.room}</h1>

                <div className="room-detail-container flex w-full flex-col gap-4 font-light">
                  <p className="room-details text-center lg:text-left">
                    {data.floor} Floor
                  </p>
                  <p className="room-details text-center lg:text-left">
                    {!!data.singleBed
                      ? `${data.singleBed} Single Beds`
                      : `${data.doubleBed} Double Bed`}
                  </p>

                  <p className="room-details text-center lg:text-left">
                    {Number(data.lcd)} LCD
                  </p>
                  {data.fridge && (
                    <p className="room-details text-center lg:text-left">
                      Fridge
                    </p>
                  )}
                  {data.bath && (
                    <p className="room-details text-center lg:text-left">
                      Bathroom
                    </p>
                  )}
                  {data.extraMattress && (
                    <p className="room-details text-center lg:text-left">
                      Extra Mattress
                    </p>
                  )}
                  <p className="room-details text-center lg:text-left">
                    complimentary Breakfast
                  </p>
                </div>
                <h2 className="self-center text-center lg:self-start lg:text-left">
                  PKR {data.price}
                  <span className="text-base text-white/50">/night</span>
                </h2>
                <p className="text-center font-light italic opacity-60 lg:text-left">
                  Book this from{" "}
                  <strong className="font-black text-white brightness-150">
                    {from.toDateString()}
                  </strong>{" "}
                  till{" "}
                  <strong className="font-black text-white brightness-150">
                    {till.toDateString()}
                  </strong>
                </p>
                <div className="flex flex-col gap-4 lg:flex-row">
                  <button
                    className="btn btn-primary btn-wide"
                    onClick={() => {
                      setRoom(Number(router.query.room));
                      const days = differenceInDays(till, from);
                      setPrice(data.price * days);
                      router.push("/info");
                    }}
                  >
                    Book Now
                  </button>
                  <button className="btn btn-primary btn-outline btn-wide">
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer"></div>
        </main>
        <Footer />
      </>
    );
  } else {
    return (
      <div className="page flex flex-row items-center justify-center">
        Loading...
      </div>
    );
  }
};

export default Room;
