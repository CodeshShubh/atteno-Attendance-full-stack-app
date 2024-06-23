import styled from 'styled-components';

const MultpleCards = ({id,name,vehicle}) => {
  return (
    <MultipleCardContainer>
            <p key={id}>{id}. {name} - {vehicle}</p>
    </MultipleCardContainer>
  )
}

export default MultpleCards;



const MultipleCardContainer = styled.div`
     background-color: green;
     padding: 0.5rem;
     font-weight: 900;
     text-align: center;
     border-radius: 20px;
     margin-top: 1rem;
     
`