"use client";
import "./movies.css";
import MovieList from "@/app/movies/components/MovieList";
import { useGetAllMoviesQuery } from "@/lib/features/movie/movieApiSlice";
import NewMovieEntry from "./NewMovieEntry";

export default function MoviePage() {
  const { data, isError, isLoading, isSuccess } =
    useGetAllMoviesQuery(undefined);
  return (
    <div className={"movies-page-container"}>
      <NewMovieEntry />
      {isLoading && <div>Loading...</div>}
      {isSuccess && <MovieList movies={data} />}
    </div>
  );
}
