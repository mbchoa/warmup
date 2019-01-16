import React, { useState } from 'react';
import styled from 'styled-components';

import { getPlates } from '../../utils';

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

const Barbell = () => {
  const [weight, setWeight] = useState('');
  const [plates, setPlates] = useState([]);

  function handleWeightChange (e) {
    setWeight(Math.round(e.target.value));
  }

  function handleCalculate (e) {
    e.preventDefault();
    setPlates(getPlates([45, 25, 10, 5, 2.5], weight));
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
    </StyledBarbell>
  );
}

export default Barbell;
