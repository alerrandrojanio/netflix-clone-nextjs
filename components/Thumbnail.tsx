import Image from "next/image"
import { useRecoilState } from "recoil"
import { modalState, movieState } from "../atoms/modalAtom"
import { imageURL } from "../constants/movie"
import { Movie } from "../typings"

interface ThumbnailProps {
  // movie: Movie | DocumentData
  movie: Movie
}

export function Thumbnail({ movie }: ThumbnailProps) {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState)

  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setCurrentMovie(movie)
        setShowModal(true)
      }}
    >
      <Image
        src={`${imageURL}${movie.backdrop_path || movie.poster_path}`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
        alt={`${movie.title || movie.name || movie.original_name} poster`}
      />
    </div>
  )
}
