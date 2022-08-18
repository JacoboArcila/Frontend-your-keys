import React from 'react'
import Card from './Card'
import list from '../../assets/list.json';
import styled from 'styled-components';

const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
`

const ContainerCard = () => {
  return (
    <DivContainer>
        {
            list.map(car => <Card car={car} />)
        }
    </DivContainer>
  )
}

export default ContainerCard