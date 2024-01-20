import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { api } from "~/utils/api";
import { areObjectsEqual } from "~/utils/obj";
function Rooms() {
  const router = useRouter();
  const { data, refetch } = api.room.getRoomById.useQuery(
    {
      id: Number(router.query.room),
    },
    {
      enabled: !!router.query.room,
      retry: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  );
  const [newPrice, setNewPrice] = useState<number>();
  const mutation = api.room.updateRoom.useMutation();
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
    if (newPrice) {
      mutation.mutate(
        {
          id: data!.id,
          name: data!.name,
          price: newPrice,
        },
        {
          onSuccess: () => {
            refetch();
          },
        },
      );
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <section>
        <h2>Details Regarding Room No. {data?.name}</h2>
      </section>
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {data &&
          Object.keys(data).map(
            (key, i) =>
              key === "price" || key === "name" ? (
                <div className="" key={i}>
                  <label className="form-control w-full basis-1/2">
                    <div className="label">
                      <span className="label-text text-lg">
                        {key.toUpperCase()}:
                      </span>
                    </div>
                    <input
                      type="number"
                      className="input input-bordered"
                      // @ts-ignore
                      defaultValue={data[key]}
                      onChange={(e) =>
                        setNewPrice(Math.abs(parseInt(e.currentTarget.value)))
                      }
                    />
                  </label>
                </div>
              ) : null
          )}
      </section>
      <section className="flex flex-row gap-4">
        <button className="btn btn-secondary" onClick={() => router.back()}>
          Cancel
        </button>
        <button
          className="btn btn-primary"
          onClick={handleUpdate}
          disabled={data?.price === newPrice}
        >
          Update
        </button>
      </section>
    </main>
  );
}

export default Rooms;
