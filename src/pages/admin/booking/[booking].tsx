import { Bookings } from "@prisma/client";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { api } from "~/utils/api";
import { areObjectsEqual } from "~/utils/obj";
function Booking() {
  const router = useRouter();
  const { data, refetch } = api.bookings.getBookingsById.useQuery(
    {
      id: Number(router.query.booking),
    },
    {
      enabled: !!router.query.booking,
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  );
  const inputRef = useRef<HTMLInputElement[]>([]);
  const [newData, setNewData] = useState<Bookings>(data!);
  const mutation = api.bookings.updateBooking.useMutation();
  // function returns the type of input field based on the key
  function checkType(key: string) {
    if (key === "price") {
      return "number";
    } else if (key === "till" || key === "from") {
      return "date";
    } else {
      return "text";
    }
  }

  function handleUpdate() {
    mutation.mutate(
      {
        ...newData,
      },
      {
        onSuccess: () => {
          refetch();
        },
      },
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <section>
        <h2>Details Regarding Booking No. {data?.id}</h2>
      </section>
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {data &&
          Object.keys(data).map(
            (key, i) =>
              key !== "id" && (
                <div className="" key={i}>
                  <label className="form-control w-full basis-1/2">
                    <div className="label">
                      <span className="label-text text-lg">
                        {key.toUpperCase()}:
                      </span>
                    </div>
                    {key === "status" ? (
                      <select
                        className="select select-bordered w-full"
                        onChange={(e) => {
                          setNewData({
                            ...data,
                            ...newData,
                            [key]: e.currentTarget.value,
                          });
                        }}
                      >
                        <option
                          value="pending"
                          selected={data["status"] === "pending"}
                          className="text-black"
                        >
                          pending
                        </option>
                        <option
                          value="staying"
                          selected={data["status"] === "staying"}
                          className="text-black"
                        >
                          staying
                        </option>
                        <option
                          value="left"
                          selected={data["status"] === "left"}
                          className="text-black"
                        >
                          left
                        </option>
                      </select>
                    ) : (
                      <input
                        type={checkType(key)}
                        ref={(ref) =>
                          inputRef.current!.push(ref as HTMLInputElement)
                        }
                        placeholder="something@gmail.com"
                        className="input input-bordered w-full"
                        // @ts-ignore
                        defaultValue={
                          key === "till" || key === "from"
                            ? new Date(data[key]).toISOString().split("T")[0]
                            : data[key as keyof typeof data]
                        }
                        onClick={() => {
                          if (
                            inputRef.current &&
                            inputRef.current[i - 1] &&
                            inputRef.current[i - 1]?.type === "date"
                          ) {
                            inputRef.current[i - 1]?.showPicker();
                          }
                        }}
                        onChange={(e) => {
                          setNewData({
                            ...data,
                            ...newData,
                            [key]:
                              key === "price" || key === "room"
                                ? Number(e.currentTarget.value)
                                : key === "till" || key === "from"
                                ? e.currentTarget.valueAsDate
                                : e.currentTarget.value,
                          });
                        }}
                      />
                    )}
                  </label>
                </div>
              ),
          )}
      </section>
      <section className="flex flex-row gap-4">
        <button className="btn btn-secondary" onClick={() => router.back()}>
          Cancel
        </button>
        <button
          className="btn btn-primary"
          onClick={handleUpdate}
          disabled={areObjectsEqual(data, newData) || newData === undefined}
        >
          Update
        </button>
      </section>
    </main>
  );
}

export default Booking;
