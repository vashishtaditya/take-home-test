import React, {useState, useEffect} from 'react'
import { fecthDailySummary } from '../api/index'
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';
import styled from 'styled-components'

const StyledContainer = styled.div`
margin-bottom: 1rem;`

const StyledChartContainer = styled.div`
background: #fff;
border-radius: 10px;
width: 80%;
height: 400px;
margin-top: 1rem;
margin-bottom: 1rem;
`
const StyledRow = styled.div``

const StyledCol = styled.div`
display: flex;
justify-content: center;
`


const Charts = ({data : {confirmed, recovered, deaths}, region}) => {

    const [dailyData, setDailydata] = useState([])

    useEffect ( ()=> { // Dont want to be bold having three useEffects in one functional component or should I be? Leaving this one here anyway.
        const fetchDailyData = async () => {
            const response = await fecthDailySummary() //Fetches Daily summary for Area Chart.
            setDailydata(response)
        }

        fetchDailyData()
    }, [] )


    const areaChart = (
        dailyData.length? (
            <StyledChartContainer>
            <ResponsiveContainer>
            <AreaChart  data= {dailyData}
                       margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <Area type="monotone" dataKey="confirmed" stroke="red" fill= "#DE2927"/>
                <Area type="monotone" dataKey="deaths" stroke="black" fill= "#3780F0"/>
            </AreaChart>
           </ResponsiveContainer>
           </StyledChartContainer>
        ) : null
    )

    const barChart = (
        confirmed ? (
            <StyledChartContainer>
            <ResponsiveContainer>
            <BarChart width={550} height={240} data={[{a: confirmed.value, b: recovered.value, c: deaths.value}]}>
              <Bar dataKey="a" fill="#DE2927" />
              <Bar dataKey="b" fill="#17B984" />
              <Bar dataKey="c" fill="#3780F0" />
            </BarChart>
            </ResponsiveContainer>
            </StyledChartContainer>
        ) : null
    )

    return (
        <StyledContainer className="container">
            <StyledRow className='row'>
                <StyledCol className='col-12 col-lg-6'>
            {region ? barChart : areaChart}
                </StyledCol>
                <StyledCol className='col-12 col-lg-6'>
            {confirmed? (

                <StyledChartContainer>
                  <ResponsiveContainer>
                <PieChart >
                <Pie
                  data={[confirmed, recovered, deaths]}
                  innerRadius={60}
                  outerRadius={90}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  <Cell fill="#DE2927"/>
                  <Cell fill="#17B984"/>
                  <Cell fill="#3780F0"/>
                </Pie>
              </PieChart>
              </ResponsiveContainer>
              </StyledChartContainer>
            ): null }
            </StyledCol>
    </StyledRow>
        </StyledContainer>
    )
}


export default Charts
