import React from 'react'
import millify from 'millify';
import styled, {css} from 'styled-components'

const StyledContainer = styled.div`
margin-bottom: 50px;`

const StyledRow = styled.div``

const StyledCol = styled.div``

const StyledCard = styled.div`
width: auto;
height: 110px;
margin: 2rem 1rem;
background-color: #ffffff;
border-radius: 10px;`

const StyledCardHeading = styled.p`
text-align: center;
color: #6A6A6A;
padding-top: 0.5rem;`

const StyledCardText = styled.p`
font-size: 30px;
text-align: center;
${(props) => props.color && 
css`
color: ${(props) => props.theme[props.color]} `}
;`

const SpinnerStyles = {
  display: 'block',
  position: 'fixed',
  zIndex: '1031',
  top: '50%',
  right: '50%'
}

const Cards = ( {data: {confirmed, recovered, deaths}}) => {

    if(!confirmed){
        return <div class="spinner-border text-primary" role="status" style={SpinnerStyles}/> //Bootstrap Spinner loads until the data is retrieved.
    }

    return (
        <StyledContainer className="container">
            <StyledRow className='row'>
                <StyledCol className='col-6 col-lg-4'> 
            <StyledCard>
                <StyledCardHeading>Infected</StyledCardHeading>
                <StyledCardText color='confirmed' >{millify(confirmed.value, {
                    decimalSeparator: '.'
                })}</StyledCardText>
            </StyledCard>
            </StyledCol>
            <StyledCol className='col-6 col-lg-4'>
            <StyledCard>
                <StyledCardHeading>Recovered</StyledCardHeading>
                <StyledCardText color='recovered'>{millify(recovered.value, {
                    decimalSeparator: '.'
                })}</StyledCardText>
            </StyledCard>
            </StyledCol>
            <StyledCol className='col-6 col-lg-4'>
            <StyledCard>
                <StyledCardHeading>Deaths</StyledCardHeading>
                <StyledCardText color='deaths'>{millify(deaths.value, {
                    decimalSeparator: '.'
                })}</StyledCardText>
            </StyledCard>
            </StyledCol>
            </StyledRow>
        </StyledContainer>
    )
}

export default Cards
