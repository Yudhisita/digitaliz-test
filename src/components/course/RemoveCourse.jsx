"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "../ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const RemoveCourse = (props) => {
  const router = useRouter();
  const { id, name } = props;

  const removeCourse = async (id) => {
    await fetch("/api/v1/course", {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      cache: "no-store",
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Course Berhasilal di hapus");
          router.push("/");
        }
      })
      .finally(() => {
        router.refresh();
      })
      .catch(() => toast.error("Course Gagal di hapus"));
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className={buttonVariants({ variant: "secondary" })}>
        Hapus
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Anda Yakin?</AlertDialogTitle>
          <AlertDialogDescription>
            Apakah anda yakin ingin menghapus Course {name}?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction onClick={() => removeCourse(id)}>
            Hapus
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
