import { useRouter } from "next/router";
import React from "react";

interface Props {
  id: number;
  name: number;
  images: string;
  floor: string;
  singleBed: number;
  doubleBed: number;
  bath: boolean;
  lcd: boolean;
  fridge: boolean;
  extraMattress: boolean;
  price: number;
}

const RoomCard = (props: Props) => {
  const router = useRouter();
  return (
    <div
      className="card max-w-md bg-white/5 shadow-xl transition-colors duration-300 hover:cursor-pointer hover:bg-primary/40"
      key={props.id}
      onClick={() => router.push(`rooms/${props.name}/`)}
    >
      <figure>
        <img src="/2beds.JPG" alt="rooms" />
      </figure>
      <div className="card-body">
        <div className="flex flex-row justify-between">
          <div>
            <h2 className="card-title tracking-[4px] 2xl:text-3xl">{`Room ${props.name}`}</h2>
            <p className="text-base font-light opacity-50">
              {props.floor} floor
            </p>
          </div>
          <h3 className="font-thin text-white 2xl:text-3xl">
            {props.price}
            <span className="text-base font-normal opacity-50"> /night</span>
          </h3>
        </div>
        {/* DETAILS */}
        <div className="flex flex-row justify-between">
          {!!props.singleBed ? (
            <p className="room-card-bed">{props.singleBed} Single Beds</p>
          ) : (
            <p className="room-card-bed">{props.doubleBed} Double Bed</p>
          )}
          <div className="flex flex-row gap-2">
            <div className="room-card-details">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
                className="room-card-svg"
              >
                <path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z" />
              </svg>
            </div>
            <div className="room-card-details">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="room-card-svg"
                height="16"
                width="20"
                viewBox="0 0 640 512"
              >
                <path d="M64 64V352H576V64H64zM0 64C0 28.7 28.7 0 64 0H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM128 448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
