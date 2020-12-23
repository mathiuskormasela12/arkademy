// function for Promise callback params
function request(resolve, reject){
  const data = [
    "Pop corn",
    "Ice cream",
    "Lemonade"
  ]
  setTimeout(()=>{
    resolve(data)
  }, 2000)
  if(data[0]!== "Pop cord"){
    reject(new Error("data with index 0 is not pop corn"))
  }
}


// Callback with Promise
function firstData(data){
  const req = new Promise(request)
  req.then(result=>{
    // console.log(`first data ${data}`)
    data(result[0])
  })
  .catch(err=>{
    throw err
  })
}

// initialize Promise
const requestData = new Promise(request);


// handling promise with then/catch
requestData.then(result => {
  console.log(result)
}).catch((error)=>{
  throw error
})


// handling promise with async/await
async function getData(){
  try{
    const result = await requestData
    console.log(result)
  }catch(error){
    throw error
  }finally{
    console.log("function has been executed")
  }
}

// fetching data with fetch-api

const fetch = require('node-fetch')

const getData = async ()=>{
  const data = await fetch('https://rickandmortyapi.com/api/episode')
  console.log(await data.json())
}