const getData = async (materi_id) => {
  const res = await fetch(`${process.env.API_URL}/api/v1/materi/${materi_id}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const CourseMateriPage = async ({ params: { materi_id } }) => {
  const responseDate = await getData(materi_id);
  return (
    <section>
      <div className="">
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${responseDate.data.embed_link}`}
          title="YouTube video player"
          frameborder="4"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="mt-5">
        <h1 className="text-2xl font-bold">{responseDate.data.title}</h1>
        <p className="text-md mt-2 text-zinc-500">
          {responseDate.data.description}
        </p>
      </div>
    </section>
  );
};

export default CourseMateriPage;
