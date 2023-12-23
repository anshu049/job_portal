import React from 'react'

const Profile = () => {
  return (
    <div className='max-h-[400px] p-4 flex flex-col items-center justify-center bg-white rounded-lg'>
        <div className='w-24 h-24 rounded-full overflow-hidden'><img className='object-fill' src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>
        <p className='font-bold mt-4'>Jimmy Sullivan</p>
        <p>HR Recruiter</p>
        <button className='bg-accent-color text-white font-bold mx-6 w-full px-4 py-2 rounded-lg mt-4'>Edit Profile</button>
    </div>
  )
}

export default Profile