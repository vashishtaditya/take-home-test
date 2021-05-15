import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;`

const StyledHeading = styled.p`
font-size: 30px;
color: #6A6A6A`

const Header = () => {
    return (
        <StyledHeader className='container'>
            <StyledHeading>Covid-19 Dashboard</StyledHeading>
        </StyledHeader>
    )
}

export default Header 
