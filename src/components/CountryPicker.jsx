import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;`

const CountryPicker = ({ regions, handleRegionChange }) => {

    return (
        <StyledContainer className='container'>
            <select name="regions" id="regions" onChange={(e) => handleRegionChange(e.target.value)} >
                <option value="">Worldwide</option>
                {regions.map((region, i) => <option key={i} value={region.name}>{region.name}</option>)}
            </select>
        </StyledContainer>
    )
}

export default CountryPicker
