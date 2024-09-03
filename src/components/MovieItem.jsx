import React, { useState } from 'react'
import { createImageUrl } from '../services/movieServices';
import {FaHeart, FaRegHeart} from 'react-icons/fa'




const MovieItem = ({movie}) => {

  const {title, backdrop_path, poster_path} = movie;
  const {like, setLike} = useState(false)

  return (
    <div className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>

        <img className='w-full h-40 block object-cover object-top' src={createImageUrl(backdrop_path ?? poster_path, 'w500')} alt={title} />

        <div className='absolute top-0 left-0 bg-black/80 h-40 w-full opacity-0 hover:opacity-100'>
       <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold'>{movie.title}</p>

       <p>
         {
          like ? (<FaHeart size={20} className='absolute top-2 left-2 text-white' />) : (<FaRegHeart size={20} className='absolute top-2 left-2 text-white' />)
         }
       </p>
        </div>

    </div>
  )
}

export default MovieItem;