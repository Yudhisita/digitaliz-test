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

const AddMateri = (props) => {
  const router = useRouter();
  const { course_id } = props;
  const [datas, setDatas] = useState({
    course_id: course_id,
    title: "",
    description: "",
    embed_link: "",
  });
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  };

  const extractUrl = (url) => {
    const videoId = url.split("youtu.be/")[1];
    return videoId;
  };

  const submitHendler = async () => {
    setLoading(true);
    try {
      const urlId = extractUrl(datas.embed_link);

      await fetch("/api/v1/materi", {
        method: "POST",
        body: JSON.stringify({
          ...datas,
          embed_link: urlId,
        }),
        cache: "no-store",
      })
        .then((res) => {
          if (!res.ok) {
            toast.error("Materi upload failed");
          } else {
            toast.success("Materi upload success");
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
        + Materi
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Tambah Materi</SheetTitle>
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
            <Label htmlFor="description">Description</Label>
            <Input
              onChange={handleChange}
              type="text"
              name="description"
              id="description"
              placeholder="Description"
            />
          </div>
          <div>
            <Label htmlFor="embed_link">Link</Label>
            <Input
              type="url"
              onChange={handleChange}
              name="embed_link"
              id="embed_link"
              placeholder="Link"
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

export default AddMateri;
