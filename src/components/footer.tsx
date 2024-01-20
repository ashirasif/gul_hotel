import Icons from "./icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-transparent to-teal-950/30 px-4 py-12">
      <div className="flex flex-row justify-center">
        <div className="flex max-w-6xl flex-row justify-center gap-4">
          <div className="flex flex-col gap-12">
            <div className="inline-flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 512 512"
                className="h-6 lg:h-10"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
              <div>
                <p>+92 423 595579</p>
                <p>+92 423 595578</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3rem"
                fill="white"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <div>
                <p>
                  House No. 84-B, Block-R, III Behind Shaukat Khanum Hospital,
                  Johar Town, Lahore
                </p>
              </div>
            </div>
          </div>
          <div className="h-full w-px bg-white"></div>
          <div className="flex basis-1/2 flex-col items-center justify-around gap-4">
            <Icons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
