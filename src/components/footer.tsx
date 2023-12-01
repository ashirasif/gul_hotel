import Icons from "./icons"


const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-transparent to-teal-950/30 py-12 border-t border-white">
        <div className="flex flex-row justify-center">

            <div className="flex flex-row justify-center gap-4 w-2/3">
                <div className="flex flex-col gap-12 basis-1/2">
                    <div className="inline-flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="2rem" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
                        <div><p>+92 423 595579</p>
                        <p>+92 423 595578</p></div>
                    </div>
                    <div className="inline-flex items-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" height="2rem" fill="white" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                        <div>
                            <p>House No. 84-B, Block-R, III Behind Shaukat Khanum Hospital, Johar Town, Lahore</p>
                        </div>
                    </div>
                </div>
                <div className="h-full w-px bg-white"></div>
                <div className="flex flex-col gap-4 basis-1/2 items-center">
                    <Icons />
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer