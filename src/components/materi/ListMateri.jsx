import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { RemoveMateri } from "./RemoveMateri";
import UpdateMateri from "./UpdateMateri";

const getDataMateri = async (course_id) => {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/materi/c/${course_id}`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const ListMateri = async (props) => {
  const responseMateri = await getDataMateri(props.courseId);

  return (
    <>
      {responseMateri.data.length !== 0 ? (
        responseMateri.data.map((materi) => (
          <div
            key={materi.id}
            className="bg-zinc-200 p-3 rounded-md hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <h1 className="text-zinc-600 font-bold text-xl">
                {materi.title}
              </h1>
              <div className="flex gap-2">
                <RemoveMateri id={materi.id} name={materi.title} />
                <UpdateMateri id={materi.id} data={materi} />
                <Link
                  className={buttonVariants({ variant: "destructive" })}
                  s
                  href={`/course/m/${materi.id}`}
                >
                  Start {">"}
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-xl text-zinc-500 text-center">
          Belum Ada Materi
        </div>
      )}
    </>
  );
};
