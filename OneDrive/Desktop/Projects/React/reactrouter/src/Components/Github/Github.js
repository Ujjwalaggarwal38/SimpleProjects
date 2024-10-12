import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // const [data,setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/Ujjwalaggarwal38').then(res => res.json()).then(data => {setData(data)})
  // },[])
  return (
    <div className='text-center m-4 bg-gray-500 text-3xl p-4 text-white'>Github Followers : {data.followers}
     <img className='' src={data.avatar_url} alt="Gitpicture"  width={300}/>
    </div>
   
  )
}

export default Github

export const GithubInfoLoader = async () => {
 const response = await fetch ('https://api.github.com/users/Ujjwalaggarwal38')
 return response.json()
}