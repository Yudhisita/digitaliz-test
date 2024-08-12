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

export const RemoveMateri = (props) => {
  const router = useRouter();
  const { id, name } = props;

  const removeMateri = async (id) => {
    await fetch("/api/v1/materi", {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Materi Berhasilal di hapus");
          router.refresh();
        }
      })
      .catch(() => toast.error("Materi Gagal di hapus"));
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className={buttonVariants({ variant: "outline" })}>
        Hapus
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Anda Yakin?</AlertDialogTitle>
          <AlertDialogDescription>
            Apakah anda yakin ingin menghapus materi {name}?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Batal</AlertDialogCancel>
          <AlertDialogAction onClick={() => removeMateri(id)}>
            Hapus
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
