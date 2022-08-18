import React, { useEffect } from 'react'
import axios from 'axios'
import './app.less'

export default function App() {
  useEffect(() => {
    axios.get('/api/mmdb/movie/v3/list/hot.json?ct=%E7%A7%A6%E7%9A%87%E5%B2%9B&ci=122&channelId=4').then(res => {
      console.log(res, 'res');
    })
  }, [])
  return (
    <div id='box'>App</div>
  )
}
