"use client";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function IndexPage() {
  const router = useRouter();

  return (
    <div>
      <Button
        variant="contained"
        onClick={() => router.push("/movies")}
      >
        Movie List
      </Button>
    </div>
  );
}
