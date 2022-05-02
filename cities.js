import fetch from 'node-fetch' /*This is a way for the browser*/
//const fetch = require('node-fetch')

const citydetails = async(city)=>{
    let url = 'https://geocode.xyz/' + city + '?json=1'
    console.log(url)
  let res= await fetch(url)
  const data = await res.json()
 
 console.log(data)
}

citydetails('new york')
