"use client";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import useAuth from "@/app/hooks/useAuth";
import { Welcome } from "@/app/Home/components/Welcome";

export default function IndexPage() {
  const router = useRouter();
  const auth = useAuth();
  return (
    <div>
      {auth && (
        <Button
          variant="contained"
          onClick={() => router.push("/movies")}
        >
          Movie List
        </Button>
      )}
      {!auth && <Welcome />}
    </div>
  );
}
