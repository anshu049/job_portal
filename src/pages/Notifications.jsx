import React from 'react'
import NotificationComponent from '../components/NotificationComponent'

import { useLoaderData } from 'react-router-dom'


const Notifications = () => {
  const {responses} = useLoaderData()
  return (
    <NotificationComponent notifications={responses}/>
  )
}

export default Notifications