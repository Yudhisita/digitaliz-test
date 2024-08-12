import Link from "next/link";

const Card = async (props) => {
  const { data } = props;
  return (
    <>
      {data.map((item) => (
        <Link
          href={`/course/${item.id}`}
          key={item.id}
          className="block hover:shadow-xl min-w-full min-h-[200px] rounded-md p-3 transition-all duration-300 border border-purple-600"
        >
          <div className="my-2 grid grid-rows-2 gap-3">
            <h1 className="text-xl font-semibold">{item.title}</h1>
            <p>{item.description}</p>
            <div>Durasi : {item.duration}</div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Card;
