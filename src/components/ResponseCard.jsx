import React from 'react'
import defalutAvatar from "../assets/defalut_avatar.png"

const ResponseCard = ({fullName,appliedFor,timing}) => {
    const time = "3d ago"
  return (
    <div className='w-full shadow-lg rounded-lg mt-2 p-4 text-black bg-white flex'>
        <div className='w-16 h-16 border rounded-full overflow-hidden mr-2'>
            <img className='object-cover w-16 h-16' src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
        <div className='flex-grow flex'>
        <div className='flex-grow flex flex-col justify-start items-start'>
            <p className='text-accent-color font-semibold text-lg font-sans'>
                {fullName+" Responded"}
            </p>
            <p>{"For the position of " + appliedFor}</p>
        </div>
        <p className='text-gray-400  text-xs max-w-16 max-h-8'>{time}</p>
        </div>
    </div>
  )
}

export default ResponseCard