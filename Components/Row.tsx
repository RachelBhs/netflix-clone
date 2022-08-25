import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useRef, useState } from 'react';
import { Movie } from '../typings';
import Miniature from './Miniature';

interface Props {
  // movie: Movie | DocumentData
  title: string,
  movies: Movie[];
}

const Row = ({ title, movies }: Props) => {
  // Doc Référence Web API https://developer.mozilla.org/fr/docs/Web/API
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMove, setIsMove] = useState(false)

  const handleClick = (direction: string) => {
    setIsMove(true);

    if (rowRef.current) {
      const {scrollLeft, clientWidth} = rowRef.current

      const scrollTo = 
        direction === 'left'
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth

        rowRef.current.scrollTo({left: scrollTo, behavior: 'smooth'})
    }
  }

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 hover:scale-125 group-hover:opacity-100 ${!isMove && 'hidden'}`}
          onClick={() => handleClick('left')}
        />

        <div ref={rowRef} className="flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2">
          {movies.map((movie) => (
            <Miniature key={movie.id} movie={movie} />
          ))}
        </div>

        <ChevronRightIcon
          className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 hover:scale-125 group-hover:opacity-100`}
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  )
}

export default Row
