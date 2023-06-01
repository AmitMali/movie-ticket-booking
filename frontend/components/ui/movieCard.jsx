import Link from "next/link";
import React from "react";
import { GiTicket } from "react-icons/gi";
const MovieCard = (props) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { Title, Poster, Actors, Language, _id, Plot, Runtime, imdbRating } =
    props.data;
  const theaterId = "12345";
  const screen = 1;
  const showTime = "9PM";
  return (
    <div className="flex w-72 bg-white shadow-md overflow-hidden">
      <div className="overflow-hidden relative  movie-item text-white movie-card">
        <div className="absolute inset-0 z-10  bg-gradient-to-t from-black via-gray-900 to-transparent" />
        <div className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info">
          <div className=" align-self-end w-full">
            <div className="h-28" />
            <div className="space-y-6 detail_info">
              <div className="flex flex-col space-y-2 inner">
                <h3 className="text-2xl font-bold text-white">{Title}</h3>
              </div>
              <div className="flex flex-row justify-between datos">
                <div className="flex flex-col datos_col">
                  <div className="popularity">{Language.split(",")[0]}</div>
                  <div className="text-sm text-gray-400">Language:</div>
                </div>
                <div className="flex flex-col datos_col">
                  <div className="release">{imdbRating} / 10</div>
                  <div className="text-sm text-gray-400">Rating:</div>
                </div>
                <div className="flex flex-col datos_col">
                  <div className="release">{Runtime}</div>
                  <div className="text-sm text-gray-400">Runtime:</div>
                </div>
              </div>
              <div className="flex flex-col overview">
                <div className="flex flex-col" />
                <div className="text-xs text-gray-400 mb-2">Overview:</div>
                <p className="text-xs text-gray-100 mb-6">
                  {Plot.slice(0, 120)}...
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute inset-0 transform w-full -translate-y-4"
          src={Poster}
        />
        <div className="poster__footer flex flex-row relative pb-10 space-x-4 z-10">
          <Link
            className="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700"
            href={`/movies/${Title}/${_id}/${theaterId}/${screen}/${showTime}`}
            target="_blank"
          >
            <GiTicket />
            <div className="text-sm text-white ml-2">Book Now</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
