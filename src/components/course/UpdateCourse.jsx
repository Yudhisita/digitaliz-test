"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const UpdateCourse = (props) => {
  const { id, data } = props;
  const router = useRouter();
  const [datas, setDatas] = useState({
    id: id,
    title: data.title,
    description: data.description,
    duration: Number(data.duration),
  });
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };

  const submitHendler = async () => {
    setLoading(true);
    try {
      await fetch("/api/v1/course", {
        method: "PATCH",
        body: JSON.stringify({
          ...datas,
          duration: Number(datas.duration),
        }),
        cache: "no-store",
      })
        .then((res) => {
          if (!res.ok) {
            toast.error("Course Edit failed");
          } else {
            toast.success("Course Edit success");
          }
        })
        .finally(() => {
          setLoading(false);
          setIsOpen(false);
          setDatas({});
          router.refresh();
        });
    } catch (error) {
      toast.error("Something went wrong, please try again");
    }
  };

  return (
    <Sheet onOpenChange={() => setIsOpen(!isOpen)} open={isOpen}>
      <SheetTrigger className={buttonVariants({ variant: "secondary" })}>
        Edit
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Course</SheetTitle>
        </SheetHeader>
        <div className="py-4 grid grid-rows-4 gap-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              onChange={handleChange}
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              defaultValue={data.title}
            />
          </div>
          <div>
            <Label htmlFor="title">Description</Label>
            <Input
              onChange={handleChange}
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              defaultValue={data.description}
            />
          </div>
          <div>
            <Label htmlFor="title">Durasi</Label>
            <Input
              onChange={handleChange}
              type="number"
              name="duration"
              id="duration"
              placeholder="Durasi"
              defaultValue={data.duration}
            />
          </div>
          <Button
            disabled={loading}
            onClick={submitHendler}
            variant="destructive"
          >
            {loading ? "Loading..." : "Upload"}
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default UpdateCourse;
