import React from 'react';
import styled from 'styled-components';

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
  return (
    <StyledBarbell>
      <Header>barbell</Header>
      <form>
        <Input placeholder="Enter target weight" />
        <Button>Calculate</Button>
      </form>
    </StyledBarbell>
  );
}

export default Barbell;
