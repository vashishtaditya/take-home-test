import React, {useState, useEffect}  from 'react'
import { fetchData, fetchRegions } from './api/index'
import Header from './components/Header'
import Cards from './components/Cards'
import Charts from './components/Charts'
import CountryPicker from './components/CountryPicker'
import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProvider} from 'styled-components'
import './App.css'

const theme = {
  confirmed: '#DE2927',
  recovered: '#17B984',
  deaths: '#3780F0'
}

export const App = () => {

  const [data, setData] = useState({})
  const [region, setRegion] = useState("")
  const [regions, setregions] = useState([])

  useEffect( () => { // Useeffect does what componentDidMount does in a class component.
    
    const fetchedData = async () => {
      const fecthedData = await fetchData()
      setData(fecthedData)
    } 
    fetchedData()
  }, [] )

  useEffect( ()=> { // I read somewhere that I should not be afraid of using multiple useEffect. Correct me if this is not the right way.
    const fetchData = async () => {
        const response = await fetchRegions() 
        setregions(response) 
    }
    fetchData()
  }, [setregions] )

  const handleRegionChange = async (region) =>{

    const fecthedData = await fetchData(region) //Fetches region data when a region is selected 
    setData(fecthedData) //Updates the State 
    setRegion(region)
  }

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header/>
      <CountryPicker regions={regions} handleRegionChange={handleRegionChange}/>
        <Cards data={data} />
        <Charts data={data} region={region}/>
    </div>
    </ThemeProvider>
  )
}

export default App

