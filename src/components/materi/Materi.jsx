import { ListMateri } from "./ListMateri";

const Materi = (props) => {
  return (
    <div className="mt-5 grid grid-cols-1 gap-3">
      <h1 className="text-xl font-semibold mb-3">List Materi</h1>
      <ListMateri courseId={props.courseId} />
    </div>
  );
};

export default Materi;
