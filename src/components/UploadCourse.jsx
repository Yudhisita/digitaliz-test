"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const UploadCourse = () => {
  const router = useRouter();
  const [datas, setDatas] = useState({
    title: "",
    description: "",
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
        method: "POST",
        body: JSON.stringify(datas),
        cache: "no-store",
      })
        .then((res) => {
          if (!res.ok) {
            toast.error("Course upload failed");
          } else {
            toast.success("Course upload success");
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
      <SheetTrigger className={buttonVariants({ variant: "destructive" })}>
        Upload
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Upload Course</SheetTitle>
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

export default UploadCourse;
