"use client";
import { Movie, Review } from "@/lib/types";
import MovieUI from "@/app/movies/components/MovieUI";
import ReviewUI from "@/app/movies/[id]/components/ReviewUI";
import EditMovie from "@/app/movies/components/EditMovie";
import ReviewEntry from "./components/ReviewEntry";
import { useGetAllReviewByMovieIdQuery } from "@/lib/features/review/reviewApiSlice";

interface MovieDetailsUI {
  movie: Movie;
}

function renderAction(movie: Movie) {
  return (
    <div>
      <EditMovie movie={movie} />
    </div>
  );
}

export default function MovieDetailsUI({ movie }: MovieDetailsUI) {
  const {
    data: reviews,
    isError,
    isLoading,
    isSuccess,
  } = useGetAllReviewByMovieIdQuery(movie._id);
  console.log(reviews);
  return (
    <div>
      <MovieUI
        movie={movie}
        render={renderAction}
      />
      <ReviewEntry movieId={movie._id} />
      {isSuccess &&
        reviews.length > 0 &&
        reviews.map((review) => (
          <ReviewUI
            key={review._id}
            review={review}
          />
        ))}
    </div>
  );
}
