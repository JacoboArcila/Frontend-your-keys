import React from 'react'
import Card from './Card'
import list from '../../assets/list.json';
import styled from 'styled-components';
import axios from "../../apis/axiosRequest";
import useRequest from "../../hooks/useRequest"

const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`

const ContainerCard = () => {

  const [response, error, loading] = useRequest({
    axiosInstance: axios,
    method: "GET",
    url: "/vehicle"
  })

  // let vehicleRandom = [];
  // vehicleRandom= response.map( i => vehicleRandom.push(i))
  // vehicleRandom = vehicleRandom.sort( ()=> Math.random() - 0.5 )

  return (
    <DivContainer>
        {
            list.map((car, index) => <Card key={index} car={car} />)
        }
    </DivContainer>
  )
}

export default ContainerCard