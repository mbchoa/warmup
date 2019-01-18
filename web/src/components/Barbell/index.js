import React, { useState } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';

import { getPlates } from '../../utils';

import Plate from './Plate';

const StyledBarbell = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (min-width: 340px) {
    width: 340px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Header = styled.h1`
  font-size: 36px;
  font-weight: 500;
  height: 20%;
  letter-spacing: 1.5px;
  text-align: center;
  text-transform: lowercase;
`

const Form = styled.form`

`

const Input = styled.input`
  border: 2px solid black;
  box-sizing: border-box;
  background-color: transparent;
  font-size: 18px;
  outline: none;
  padding: 8px;
  text-align: center;
  width: 100%;
`

const Button = styled.button`
  border: 2px solid black;
  background-color: transparent;
  color: black;
  cursor: pointer;
  font-size: 18px;
  margin-top: 16px;
  outline: none;
  padding: 8px;
  width: 100%;
`;

const PlatesDropZone = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  position: relative;
  width: 100%;
`;

const BarbellSleeve = styled.div`
  border-left: 1px solid black;
  background-color: grey;
  height: 200px;
  width: 20px;
`;

const BarbellSleeveEnd = styled.div`
  border-left: 1px solid black;
  border-top: 1px solid black;
  background-color: grey;
  height: 20px;
  width: 40px;
`;

const PlateDropZone = styled.div`
  bottom: ${props => props.index*25}px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
`

const Barbell = () => {
  const [weight, setWeight] = useState('');
  const [plates, setPlates] = useState([]);

  function handleWeightChange (e) {
    setWeight(Math.round(e.target.value));
  }

  function handleCalculate (e) {
    e.preventDefault();
    setPlates(getPlates(weight));
    setWeight('');
  }

  return (
    <StyledBarbell>
      <Header>barbell</Header>
      <Form onSubmit={handleCalculate}>
        <Input
          onChange={handleWeightChange}
          placeholder="Enter target weight"
          value={weight}
        />
        <Button>Calculate</Button>
      </Form>
      <PlatesDropZone>
        {map(plates, (value, index) => (
          <PlateDropZone index={index+1} key={index}>
            <Plate color="red" weight={value}>
              <div>{value}</div>
            </Plate>
          </PlateDropZone>
        ))}
        <BarbellSleeve />
        <BarbellSleeveEnd />
      </PlatesDropZone>
    </StyledBarbell>
  );
}

export default Barbell;
