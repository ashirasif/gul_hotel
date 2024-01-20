import React from "react";
import Cursor from "~/components/cursor";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";

const Page = () => {
  return (
    <>
      <Navbar />
      <Cursor />
      <main className="">
        <section className="flex min-h-screen flex-col items-center justify-center p-4">
          <div className="flex flex-col items-center gap-4 text-center lg:w-2/3">
            <h2>We would love to hear from you</h2>
            <div className="flex flex-row justify-center gap-x-4">
              <button className="btn btn-primary btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Call +92 42 3595579
              </button>
              <button className="btn btn-primary btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                Call +92 42 3595578
              </button>
            </div>
            <div className="flex flex-col justify-start gap-4 lg:w-2/3">
              <h2 className="text-center">Or Send A Message!</h2>
              <div className="ma-border flex flex-col gap-4 bg-primary/5 p-4">
                <div className="flex flex-row gap-4">
                  <label className="form-control w-full basis-1/2">
                    <div className="label">
                      <span className="label-text text-lg">Name:</span>
                    </div>
                    <input
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
                      type="email"
                      placeholder="something@gmail.com"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-lg">Message:</span>
                  </div>
                  <textarea
                    placeholder="Eg: Muhammad Ashir"
                    className="textarea textarea-bordered w-full"
                  />
                </label>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
