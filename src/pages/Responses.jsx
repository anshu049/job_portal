import React, { Suspense } from 'react'
import ResponseDesc from '../components/ResponseDesc'
import { responsesampleData } from '../data/sample'
import { getResponse } from '../api/api'
import { Await, defer, useLoaderData } from 'react-router-dom'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';

const Responses = () => {
  const dataPromise = useLoaderData()
  return (
    <Suspense fallback={<Spin className='min-h-[85vh] rounded-lg drop-shadow-md w-full flex items-center justify-center bg-white' indicator={<LoadingOutlined style={{ fontSize: 64 ,color:'#268D61' }} spin />}/>}>
      <Await resolve={dataPromise.response}>
        {({response})=><ResponseDesc response={response}/>}
      </Await>
    </Suspense>
  )
}

export async function responseLoader({params}){
  return defer({response:getResponse(params.responseId)});
}

export default Responses