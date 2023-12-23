import React from 'react'
import TagChip from './TagChip'

const Avalibitly = () => {
  return (
    <div className='min-h-[200px] bg-white rounded-lg mt-4 px-4 py-2 *:mt-2'>
        <p className=' font-bold text-lg '>Availability</p>
        <p className='bg-accent-color inline-block p-2 text-white rounded-full font-bold text-sm'>🔥 Actively Hiring </p>
        <p className='font-bold text-lg'>Listings and responses</p>
        <p className='text-accent-color text-base'>
            18 Total Listings 
        </p>
        <p className='text-accent-color text-base'>
            203 Total responses
        </p>
        <p className='font-bold text-lg mb-1'>
            Looking For:
        </p>
        <TagChip skill="Ui designer" />
        <TagChip skill="Ui Researcher" />
        <TagChip skill="Animator" />
        <TagChip skill="Ui designer" /> 
    </div>
  )
}

export default Avalibitly