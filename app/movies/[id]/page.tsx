"use client";

import { useParams, useRouter } from "next/navigation";
import MovieDetailsUI from "@/app/movies/[id]/MovieDetailsUI";
import { Movie } from "@/lib/types";
import Button from "@mui/material/Button";
import { useGetAllMoviesQuery } from "@/lib/features/movie/movieApiSlice";

export default function MovieDetailsPage() {
  const { id }: { id: string } = useParams<{
    id: string;
  }>();

  const { movie, isLoading } = useGetAllMoviesQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => {
      return {
        // Return only the derived data and the specific status flags you need
        movie: (data ?? []).filter((m) => m._id === id)[0] as Movie,
        isLoading,
      };
    },
  });

  const router = useRouter();
  const onBackHandler = () => {
    router.push("/movies");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div style={{ marginTop: "30px" }}>
        <Button
          variant="contained"
          onClick={onBackHandler}
        >
          Back
        </Button>
        <MovieDetailsUI movie={movie} />
      </div>
    );
  }
}
