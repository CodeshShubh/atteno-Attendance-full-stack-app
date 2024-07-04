import styled from 'styled-components';

const MultpleCards = ({id,name,vehicle, isPresentToday}) => {
  return (
    <MultipleCardContainer $ispresenttoday={isPresentToday}>
            <p key={id}> {name} - {vehicle}</p>
    </MultipleCardContainer>
  )
}

export default MultpleCards;



const MultipleCardContainer = styled.div`
     background-color: ${props => props.$ispresenttoday ? 'green' : 'red'};
     padding: 0.5rem;
     font-weight: 900;
     text-align: center;
     border-radius: 20px;
     margin-top: 1rem;
     
`