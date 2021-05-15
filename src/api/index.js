import axios from 'axios'


const URL = 'https://covid19.mathdro.id/api' // Main Api Endpoint 

export const fetchData = async (region) => {       // Making use of async and await for server issues.  

    let dynamicURL = URL

    if(region){
        dynamicURL = `${URL}/countries/${region}`
    }

    try{
        const { data: { confirmed, recovered, deaths } } = await axios.get(dynamicURL) //Destructuring response while fetching data from the api.

        const extractedData = { //Extracting data that is required, lets not pass on what's not!
            confirmed,
            deaths,
            recovered,
        }

        return extractedData
    }
    catch(error){
        console.log(error)
    }
}

export const fecthDailySummary = async () => {

    try{
        
        const {data} = await axios.get(`${URL}/daily`)

        const extracteddata = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total
        })) 

        return extracteddata
}
catch(error){
    console.log(error)
}

}

export  const fetchRegions = async () => {

    try{
          const {data: {countries}} = await axios.get(`${URL}/countries`)
          return countries
    }
    catch(error) {
        console.log(error)
    }
}
