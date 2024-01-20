import Image from "next/image";
import Cursor from "~/components/cursor";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";

const Page = () => {
  return (
    <>
      <Navbar />
      <Cursor />
      <main className="">
        <section className="my-16 flex min-h-screen flex-col items-center justify-center gap-16 px-4 2xl:gap-52">
          {/* WELCOME */}
          <div className="aflex max-w-4xl items-center justify-center gap-4">
            <div className="flex flex-col justify-start gap-8">
              <div className="">
                <h2>
                  Welcome to <span className="text-primary">Gul Hotel</span>
                </h2>
                <p className="">
                  Gul Hotel, where warmth and hospitality intertwine to create a
                  haven of comfort and charm. Located in the heart of Johar
                  Town, Lahor, Gul Hotel is not just a place to rest; it's a
                  destination where every guest is welcomed with open arms.
                </p>
              </div>
              <div>
                <h2>
                  Our <span className="text-primary">Story</span>
                </h2>
                <p>
                  Our story at Gul Hotel is one of passion and a sincere
                  commitment to providing an unforgettable experience. From the
                  moment you step into our lobby, you become a part of our
                  extended family. We take pride in offering more than just
                  accommodation – we offer a home away from home.
                </p>
              </div>
            </div>

            <div className="">
              <Image
                src={"/about.jpeg"}
                alt={"beds"}
                width={500}
                height={500}
                className="aspect-sqaure img min-w-[15vw]"
              />
            </div>
          </div>
          {/* GOAL */}
          <div className="aflex max-w-4xl items-center justify-center gap-8 max-md:flex-col-reverse">
            <div>
              <Image
                src={"/about2.jpeg"}
                alt={"room-door"}
                height={500}
                width={500}
                className="img min-w-[15vw]"
              />
            </div>
            <div>
              <h2>
                Our <span className="text-primary">Goal</span>
              </h2>
              <p>
                Gul Hotel is a testament to the beauty found in simplicity. Our
                journey began with the belief that a stay should be more than a
                transaction; it should be an opportunity to find solace and joy.
                Our team, a close-knit family, works tirelessly to ensure your
                stay is marked by comfort and genuine hospitality. What makes
                Gul Hotel special is our dedication to providing quality rest
                and relaxation without unnecessary extravagance. Life can be
                demanding, and we believe your travels should be a chance to
                rejuvenate. Our thoughtfully designed rooms and inviting
                atmosphere are crafted to make simplicity a luxurious
                experience.
              </p>
            </div>
          </div>
          {/* SINGLE MSG */}
          <div className="max-w-4xl text-center italic">
            <p>
              &quot;As you explore Gul Hotel, you'll discover our commitment to
              sustainability, community involvement, and a celebration of local
              culture. We strive to make a positive impact on both our guests
              and the environment, ensuring your stay is not only delightful but
              also mindful.&quot;
            </p>
            <p className="mt-4 font-bold">Imran</p>
            <p className="font-thin">Owner - Gul Hotel</p>
          </div>
          <div className="flex max-w-4xl flex-col justify-start gap-4">
            <h2 className="text-center">Get In Touch!</h2>
            <div className="ma-border flex flex-col gap-4 bg-white/5 p-4">
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
          <div className="w-2/3 brightness-50 transition duration-300 hover:brightness-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13614.793617326884!2d74.2732488!3d31.4499689!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901716d88712b%3A0x2fd945b7152516dc!2sGul%20Hotel!5e0!3m2!1sen!2s!4v1701632769788!5m2!1sen!2s"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
