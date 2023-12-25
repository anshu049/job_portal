import React from 'react'
import { CiBellOn } from "react-icons/ci"

const NotificationComponent = ({notifications}) => {

  const notificationRender = (name)=>{
    return <>
    <div className='flex items-center justify-between'>
            <div className='flex items-center justify-start p-2 flex-grow'>
              <span className='mr-2 items-center mt-0.5'><CiBellOn /></span>
              {name} Responded
            </div>
            <p className='text-sm text-gray-500'>3 min ago</p>
          </div>
          <div className="border-t border-gray-300 my-2"></div>
    </>
  }

  return (
    <div className='bg-white p-6 mt-4 mx-4 drop-shadow-md rounded-lg min-h-[85vh] max-h-[85vh] '>
      <p className='font-bold text-2xl '>My Notifications</p>
        <div className='flex flex-col mt-4 p-2 overflow-auto min-h-[70vh] max-h-[70vh] '>
          {notifications.map((notification)=>{
            return notificationRender(notification.firstName + " "+ notification.lastName)
          })}
        </div>
    </div>
  )
}

export default NotificationComponent